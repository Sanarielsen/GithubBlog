import { Container, SearchComponent, SearchHeader } from "@globalStyles/SearchPostsContainer";

export function SearchPosts() {

  return (
    <Container>
      <SearchHeader>
        <p>
          Publicações
        </p>
        <span>
          6 publicações
        </span>
      </SearchHeader>
      <SearchComponent>
        <input type="text" name="itxSearchPost" placeholder="Buscar conteúdo"/>
      </SearchComponent>
    </Container>
  )
}