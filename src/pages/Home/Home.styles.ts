import { Spacings } from '@/styles/tokens';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: ${Spacings.Big};
  grid-template-areas:
    'header header'
    'filters list';
`;

export const HeaderWrapper = styled.div`
  grid-column: span 2;
`;
