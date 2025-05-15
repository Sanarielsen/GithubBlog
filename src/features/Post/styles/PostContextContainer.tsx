import styled from "styled-components"

import { devices } from "@globalUtils/devices"

export const Container = styled.div`
  padding: 40px 0;

  @media ${devices.tablet} {
    padding: 40px 32px;
  }
`