import { breakpoints } from '@/styles';
import styled from 'styled-components';

export const HiddenOnMobile = styled.div`
  display: none;

  ${breakpoints.lg} {
    display: block;
  }
`;
