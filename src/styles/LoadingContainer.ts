import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const ContainerLoading = styled.section`
  display: flex;
  justify-content: center;

  width: 100%;

  margin: 32px 0;
`

export const LoadingCircle = styled.div`
  width: 48px;
  height: 48px;
  border: 6px solid ${props => props.theme["blue-200"]};
  border-top: 6px solid ${props => props.theme["primary"]};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`
