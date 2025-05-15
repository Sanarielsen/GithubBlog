import styled from 'styled-components'

import { devices } from '@globalUtils/devices'

export const ResoluctionTest = styled.div`

  display: none;

  @media ${devices.mobileS} {
    display: block;
    color: blue;
    &::after { content: "Mobile Small"; }
  }
  @media ${devices.mobileM} {
    display: block;
    color: green;
    &::after { content: "Mobile Medium"; }
  }
  @media ${devices.mobileL} {
    display: block;
    color: orange;
    &::after { content: "Mobile Large"; }
  }
  @media ${devices.tablet} {
    display: block;
    color: purple;
    &::after { content: "Tablet"; }
  }
  @media ${devices.laptop} {
    display: block;
    color: red;
    &::after { content: "Laptop"; }
  }
  @media ${devices.laptopL} {
    display: block;
    color: brown;
    &::after { content: "Laptop Large"; }
  }
  @media ${devices.desktop} {
    display: block;
    color: black;
    &::after { content: "Desktop"; }
  }
`