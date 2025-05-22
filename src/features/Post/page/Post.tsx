import { Container } from "@features/Post/styles/PostContainer";
import { PostContext } from "@features/Post/components/PostContext";
import { PostHeader } from "@features/Post/components/PostHeader";

export function Post() {
  return (
    <Container>
      <PostHeader />
      <PostContext />
    </Container>
  )
}