import { breakpoints } from '@/styles';
import { Spacings } from '@/styles/tokens';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  align-content: space-between;
  grid-gap: ${Spacings.Big};

  ${breakpoints.md} {
    grid-template-columns: repeat(12, minmax(auto, 1fr));
  }
`;
