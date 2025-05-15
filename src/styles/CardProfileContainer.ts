import styled from "styled-components";

import { devices } from "@globalUtils/devices";

export const Container = styled.div`

  position: relative;
  display: grid;
  align-items: center;
  margin-top: -1rem;  
  grid-template-columns: 1fr;
  background-color: ${ props => props.theme['gray-800'] };
  border-radius: 10px;  

  @media ${devices.mobileL} {
    grid-template-columns: 1fr;
  }

  @media ${devices.tablet} {
    grid-template-columns: 1fr 2fr;
  }

  @media ${devices.laptop || devices.desktop} {

    margin-top: -5.635rem;    
    height: 212px;
    grid-template-columns: 1fr 3fr;
  }
  
`

export const CardImage = styled.div`
  display: flex;  
  justify-content: center;
  padding: 16px 0;

  img {
    width: 140px;
    heigh: 140px;
    border-radius: 8px;
  }

  @media ${devices.mobileL} {
    
    padding: 32px 0;
  }

  @media ${devices.tablet} {
    
    padding: 32px 8px;
  }
`

export const CardDescription = styled.div`
  padding: 16px;

  h3 {    
    text-align: center;
  }

  p {
    padding: 16px;
  }

  div {        
    text-align: center;
  }

  @media ${devices.mobileL} {
    padding: 16px;
  }

  @media ${devices.laptop || devices.desktop} {
    h3 {
      margin: 0 16px;    
      text-align: left;
    }
  }
`

export const DescriptionIcons = styled.div`

  @media ${devices.laptop} {
  
    display: flex;
    justify-content: flex-start;
    padding-left: 8px;
    gap: 24px;
  }

  @media ${devices.laptopL} {
  
    display: flex;
    justify-content: flex-start;
    gap: 24px;
  }

`

export const IconGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;

  padding: 4px;
`

export const CardRedirect = styled.a`

  display: none;

  @media ${devices.laptop} {
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    margin-top: 1.8rem;
    margin-right: 2rem;

    font-weight: bold;
    text-decoration: none;

    color: ${ props => props.theme["primary"] };

    img {
      padding-left: 8px;
      padding-bottom: 2px;
    }
  }
`