import { Container, PostSlot } from "@globalStyles/CardPostsContainer";

const postsMocked = [
  { id: 1, title: 'Titulo 1', description: 'A' },
  { id: 2, title: 'Titulo 2', description: 'B' },
  { id: 3, title: 'Titulo 3', description: 'C' },
  { id: 4, title: 'Titulo 4', description: 'D' },
  { id: 5, title: 'Titulo 5', description: 'F' },
  { id: 6, title: 'Titulo 6', description: 'G' },
]

export function CardPosts() {
  return (
    <Container>
       { postsMocked.map( post => (
          <PostSlot key={post.id}>
            {post.title}
          </PostSlot>
       ) ) }

       { /* Cria uma páginacao aqui caso houver mais que x quantidade por resolucao */ }
    </Container>
  )
}