export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

//Método gerado via Copilot e comentado por Sanarielsen;
export const getSinceTheDateHappen = (date: string) => {

  //Armazena a data enviada em relacao a data atual;
  const dateOccurency = new Date(date);
  const now = new Date();

  //Armazena a diferença entre a atual e a enviada
  const diffMs = now.getTime() - dateOccurency.getTime();

  //Calcula os segundos, minutos, horas e dias dessa diferença
  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  //Faz a verificacao se essa diferença é maior que...
  //Dias...
  if (days > 0) return `${days} dia${days > 1 ? 's' : ''} atrás`;
  //Horas...
  if (hours > 0) return `${hours} hora${hours > 1 ? 's' : ''} atrás`;
  //Minutos...
  if (minutes > 0) return `${minutes} minuto${minutes > 1 ? 's' : ''} atrás`;

  //Caso contrário, foi postada agora mesmo.
  return `Agora mesmo`;
}