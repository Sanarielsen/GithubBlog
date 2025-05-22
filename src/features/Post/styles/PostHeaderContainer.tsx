import styled from "styled-components"

import { devices } from "@globalUtils/devices"

export const Container = styled.div`

  margin-top: -5rem;
  padding: 36px 36px 18px;
  background-color: ${ props => props.theme['gray-800'] };

  width: 100%;
  height: 100%;
  border-radius: 10px;
  
  @media ${devices.tablet} {
  
    padding: 36px;
  }

`;

export const PostHeaderToggles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  a {
    display: flex;
    align-items: center;
    gap: 8px;

    text-decoration: none;
    font-weight: bold;
    color: ${ props => props.theme["primary"] };
  }
  
  a#aRedirect {
    justify-content: flex-end;
  }
`;

export const PostHeaderDescription = styled.div`
  padding: 20px 0 16px 0;

  @media ${devices.tablet} {
  
    padding: 20px 0 8px 0;
  }
`;

export const DescriptionIcons = styled.div`

  @media ${devices.tablet} {
  
     display: flex;
     justify-content: flex-start;
     gap: 32px;
  }
`;

export const IconGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;

  padding: 4px;
`;