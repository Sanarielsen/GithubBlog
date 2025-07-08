import { useParams } from "react-router-dom";

import { Container } from "@features/Post/styles/PostContainer";
import { PostContext } from "@features/Post/components/PostContext";
import { PostHeader } from "@features/Post/components/PostHeader";
import { useQueryIssue } from "@globalQueries/getIssue";
import { LoadingCircle } from "@globalComponents/LoadingCircle";

export function Post() {
  const { id } = useParams();

  const { isPending, data: post } = useQueryIssue(id ? Number(id) : 0);

  if (isPending) 
    return (
      <Container>
        <LoadingCircle />
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