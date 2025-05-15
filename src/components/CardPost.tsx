import ReactMarkdown from "react-markdown";

import { Container, PostDescription, PostHeader } from "@globalStyles/CardPostContainer";
import type { IssuePost } from "@globalTypes/posts";
import { getSinceTheDateHappen } from "@globalUtils/dateFormatter";

interface CardPostProps {
  post: IssuePost
  onClickCard: (id: number) => void;
}

export function CardPost({post, onClickCard}: CardPostProps) {

  const maxLength = 200;
  
  const shortDescription =
    post.description.length > maxLength
      ? post.description.slice(0, maxLength) + "..."
      : post.description;

  return (
    <Container onClick={() => onClickCard(post.id)}>
      <PostHeader>
        <h4 id={"postTitle" + post.id}>
          {post.title}
        </h4>
        <span id={"postDate" + post.id}>
          {getSinceTheDateHappen(post.createdAt)}
        </span>        
      </PostHeader>
      <PostDescription>        
        <ReactMarkdown>{shortDescription}</ReactMarkdown>        
      </PostDescription>      
    </Container>
  )
}