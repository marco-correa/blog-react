import { Colors, Spacings } from '@/styles/tokens';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-self: start;
  gap: ${Spacings.Normal};
  flex-direction: column;
  border: 1px solid ${Colors.NeutralExtraLight};
  padding: ${Spacings.Normal};
  min-width: 314px;
  max-width: 314px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${Spacings.Small};
`;
