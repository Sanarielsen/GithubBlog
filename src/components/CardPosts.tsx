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

  const { data: posts } = listPosts

  if (!posts) 
    return (
      <Container>
        <p>Sem posts...</p>  
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