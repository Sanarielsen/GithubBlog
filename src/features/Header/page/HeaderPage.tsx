import { HeaderPageContainer } from "@features/Header/styles/HeaderPageContainer";
import imageBackground from "@globalAssets/images/HeaderBackground.png"

export function HeaderPage() {
  return (    
    <HeaderPageContainer>            
      <img src={imageBackground} alt="Fundo Cabeçalho da Pãgina" />
    </HeaderPageContainer>
  )
}