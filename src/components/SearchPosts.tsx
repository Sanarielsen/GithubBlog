import { Container, SearchComponent, SearchHeader } from "@globalStyles/SearchPostsContainer";

interface SearchPostsProps {
  totalPosts: number | null;
  onSearchPosts: (searchFor: string) => void;
}

export function SearchPosts({ totalPosts, onSearchPosts }: SearchPostsProps ) {   

  return (
    <Container>
      <SearchHeader>
        <p>
          Publicações
        </p>
        <span>
          {totalPosts} publicações realizadas
        </span>
      </SearchHeader>
      <SearchComponent>
        <input type="text" name="itxSearchPost" placeholder="Buscar conteúdo" onChange={(e) => onSearchPosts(e.target.value)}/>
      </SearchComponent>
    </Container>
  )
}