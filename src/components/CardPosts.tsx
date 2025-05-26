import { useNavigate } from "react-router-dom";

import { CardPost } from "@globalComponents/CardPost";
import { Container } from "@globalStyles/CardPostsContainer";
import type { UseQueryResult } from "@tanstack/react-query";
import type { IssuePost } from "@globalTypes/posts";

interface CardPostsProps {
  listPosts: UseQueryResult<IssuePost[], Error>
  searchFor: string | null;
}

export function CardPosts({ listPosts, searchFor }: CardPostsProps) {
  const navigate = useNavigate();

  const { isPending, isError, error, data: posts } = listPosts

  //FEATURE: Create a loading component, error component and empty data component
  if (isPending) 
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    )
  if (isError)
    return (
      <Container>
        <p>Error: {error.message}</p>
      </Container>
    )     
  if (!posts) 
    return (
      <Container>
        <p>No data</p>  
      </Container>
    )

  const filteredPosts = searchFor && searchFor.trim() !== ""
    ? posts.filter(
      post =>
        post.title.toLowerCase().includes(searchFor.toLowerCase()) ||
        post.description.toLowerCase().includes(searchFor.toLowerCase())
    ) : posts;

  return (
    <Container>
       { filteredPosts.map( post => (
          <CardPost key={post.id} post={post} onClickCard={(id) => 
            navigate(`/post/${id}`)
          } />
       ) ) }

       { /* Cria uma páginacao aqui caso houver mais que x quantidade por resolucao */ }
    </Container>
  )
}