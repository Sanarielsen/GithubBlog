import styled from "styled-components"

export const Container = styled.section`
  
  margin-top: 60px;
`;

export const SearchHeader = styled.div`

  display: grid;
  padding-bottom: 12px;
  grid-template-columns: 1fr 1fr;

  p {
    font-weight: bold;
    color: ${ props => props.theme["blue-100"] };
  }

  span {
    color: ${ props => props.theme["secondary"]};
    text-align: right;
  }
`;

export const SearchComponent = styled.div`
    
  input {
    background: ${ props => props.theme["black"] };
    color: ${props => props.theme["white"] };

    padding: 16px 12px;

    width: 100%;
    height: 50px;
    
    border-radius: 6px;
    border: 1px solid ${props => props.theme["gray-600"]};

    &::placeholder {
      color: ${props => props.theme["gray-500"] };
    }

    &:hover {
      border: 1px solid ${props => props.theme["primary"]};      
    }
  }
`;