import { devices } from "@globalUtils/devices";
import styled from "styled-components";

export const Container = styled.section`
  
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  padding: 2.5rem 0;

  @media ${devices.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${devices.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${devices.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`