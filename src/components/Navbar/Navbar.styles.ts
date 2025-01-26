import { breakpoints } from '@/styles';
import { Colors, Spacings } from '@/styles/tokens';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${Colors.NeutralExtraLight};

  padding: ${Spacings.Normal};

  ${breakpoints.md} {
    padding: ${Spacings.Normal} ${Spacings.ExtraLarge};
  }
`;
