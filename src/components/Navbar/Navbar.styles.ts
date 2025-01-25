import { Colors, Spacings } from '@/styles/tokens';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${Spacings.Normal} ${Spacings.ExtraLarge};
  border-bottom: 1px solid ${Colors.NeutralExtraLight};
`;
