import ReactMarkdown from "react-markdown";

import { Container } from "@features/Post/styles/PostContextContainer";

interface PostContainerProps {
  context: string;
}

export function PostContext( {context}: PostContainerProps ) {
  return (
    <Container>
      <ReactMarkdown>{context}</ReactMarkdown>
    </Container>
  )
}