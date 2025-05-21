import { CardPost } from "@globalComponents/CardPost";
import { Container } from "@globalStyles/CardPostsContainer";

const postsMocked = [
  { id: 1, title: 'A importância de utilizar tags semânticas', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae pharetra sapien. Morbi at neque nibh. Nunc a semper purus. Nullam sodales sed magna id imperdiet. Sed quis blandit purus.', createdAt: '2025-05-16T13:00:49.026Z' },
  { id: 2, title: 'Comunicação é uma skill subestimada?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae pharetra sapien. Morbi at neque nibh. Nunc a semper purus. Nullam sodales sed magna id imperdiet. Sed quis blandit purus.', createdAt: '2025-05-17T13:01:49.026Z' },
  { id: 3, title: 'Trabalhando com uma grande massa de dados', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae pharetra sapien. Morbi at neque nibh. Nunc a semper purus. Nullam sodales sed magna id imperdiet. Sed quis blandit purus.', createdAt: '2025-05-18T13:02:49.026Z' },
  { id: 4, title: 'Simplificando o básico do Git e Github', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae pharetra sapien. Morbi at neque nibh. Nunc a semper purus. Nullam sodales sed magna id imperdiet. Sed quis blandit purus. Nunc imperdiet tincidunt erat id sollicitudin. Etiam elementum pretium cursus. Sed faucibus arcu eget dolor congue suscipit. Nam vehicula luctus dui, in finibus lacus. Proin at scelerisque dolor. Aenean tortor massa, tempus sit amet euismod a, egestas ut arcu. ', createdAt: '2025-05-19T13:03:49.026Z' },
  { id: 5, title: 'Criando um Scroll Infinite Performático', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae pharetra sapien. Morbi at neque nibh. Nunc a semper purus. Nullam sodales sed magna id imperdiet. Sed quis blandit purus.', createdAt: '2025-05-20T13:04:49.026Z' },
  { id: 6, title: 'Iniciando na area do Open Source', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae pharetra sapien. Morbi at neque nibh. Nunc a semper purus. Nullam sodales sed magna id imperdiet. Sed quis blandit purus.', createdAt: '2025-05-21T13:32:10.966Z' },
]

export function CardPosts() {
  return (
    <Container>
       { postsMocked.map( post => (
          <CardPost key={post.id} post={post} />
       ) ) }

       { /* Cria uma páginacao aqui caso houver mais que x quantidade por resolucao */ }
    </Container>
  )
}