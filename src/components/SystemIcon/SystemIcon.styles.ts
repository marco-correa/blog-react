import { breakpoints } from '@/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 16px;
  width: 16px;

  ${breakpoints.md} {
    height: 24px;
    width: 24px;
  }
`;
