import styled from 'styled-components';

import { devices } from '@globalUtils/devices';

export const HeaderPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 5rem;
  }

  @media ${devices.mobileL} {
    img {
      height: 8rem;
    }
  }

  @media ${devices.tablet} {
    img {
      height: 10rem;
    }
  }

  @media ${devices.laptop || devices.desktop} {
    img {
      height: auto;
    }
  }
`;