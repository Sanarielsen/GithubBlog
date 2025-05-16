import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${ props => props.theme["blue-200"]};
  }

  body {
    background: ${props => props.theme["black-background"]}
  }

  body, input, textarea, button {
    font-family: "Nunito", sans-serif;
    font-optical-sizing: auto;
    line-height: 160%;
  }
`
  
  