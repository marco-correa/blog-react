import { breakpoints } from '@/styles';
import { Spacings } from '@/styles/tokens';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: ${Spacings.Big};

  ${breakpoints.md} {
    grid-template-columns: repeat(12, auto);
  }
`;
