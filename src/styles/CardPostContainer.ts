import styled from "styled-components";

export const Container = styled.article`

  padding: 32px;

  border-radius: 10px;
  background: ${ props => props.theme["gray-700"] };
  border: 2px solid transparent; // Set border width and style by default


  &:hover {
    border-color: ${props => props.theme["gray-500"]};
  }
`

export const PostHeader = styled.div`

  display: grid;  
  grid-template-columns: 2fr 1fr;

  h4 {
    font-size: 20px;
  }

  span {
    text-align: right;
    color: ${ props => props.theme["secondary"] };
  }
`

export const PostDescription = styled.div`

  margin-top: 20px;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`