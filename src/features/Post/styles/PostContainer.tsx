import styled from "styled-components"

import { devices } from "@globalUtils/devices"

export const Container = styled.div`
  
  padding: 0 3rem;

  @media ${devices.mobileL} {
    padding: 0 6rem;
  }

  @media ${devices.tablet} {
    padding: 0 8rem;
  }

  @media ${devices.laptop} {
    padding: 0 12rem;
  }

  @media ${devices.laptopL || devices.desktop} {
    padding: 0 26rem;
  }

  -webkit-font-smoothing: antialiased;
`