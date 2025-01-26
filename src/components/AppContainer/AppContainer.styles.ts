import { breakpoints } from '@/styles';
import { Spacings } from '@/styles/tokens';
import styled from 'styled-components';

export const Content = styled.main`
  padding: ${Spacings.Normal};
  display: flex;
  justify-content: center;

  ${breakpoints.md} {
    padding: ${Spacings.Large} ${Spacings.ExtraLarge};
  }
`;
