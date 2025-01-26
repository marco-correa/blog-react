import { Colors, Spacings } from '@/styles/tokens';
import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 42px;
  background-color: ${Colors.NeutralExtraLight};
  padding: ${Spacings.Small} ${Spacings.ExtraSmall};
`;
