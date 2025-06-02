import { useParams } from "react-router-dom";

import { Container } from "@features/Post/styles/PostContainer";
import { PostContext } from "@features/Post/components/PostContext";
import { PostHeader } from "@features/Post/components/PostHeader";
import { useQueryIssue } from "@globalQueries/getIssue";

export function Post() {
  const { id } = useParams();

  const { isPending, isError, error, data: post } = useQueryIssue(id ? Number(id) : 0);

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
  if (!post) 
    return (
      <Container>
        <p>No data</p>  
      </Container>
    )

  return (
    <Container>
      <PostHeader post={post} />
      <PostContext context={post.body} />
    </Container>
  )
}