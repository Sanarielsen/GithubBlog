import { Container, PostDescription, PostHeader } from "@globalStyles/CardPostContainer";
import { getSinceTheDateHappen } from "@globalUtils/dateFormatter";

interface PostProps {
  id: number;
  title: string;
  description: string;
  createdAt: string;
}

interface CardPostProps {
  post: PostProps
}

export function CardPost({post}: CardPostProps) {

  return (
    <Container>
      <PostHeader>
        <h4 id={"postTitle" + post.id}>
          {post.title}
        </h4>
        <span id={"postDate" + post.id}>
          {getSinceTheDateHappen(post.createdAt)}
        </span>        
      </PostHeader>
      <PostDescription>
        <p id={"postDescription" + post.id}>
          {post.description}
        </p>
      </PostDescription>      
    </Container>
  )
}