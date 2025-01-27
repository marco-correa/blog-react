import { Colors, Spacings } from '@/styles/tokens';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacings.Small};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${Spacings.Small};
  padding: ${Spacings.None};
`;

export const Item = styled.li<{ $selected: boolean }>`
  list-style: none;
  cursor: pointer;
  padding: ${Spacings.ExtraSmall} ${Spacings.Small};

  color: ${Colors.NeutralDarkest};
  border: 1px solid ${Colors.None};
  border-bottom-color: ${Colors.NeutralExtraLight};

  &:hover {
    color: ${Colors.AccentDark};
  }

  ${({ $selected }) =>
    $selected &&
    css`
      color: ${Colors.AccentDark};
      border-color: ${Colors.AccentDark};
      border-radius: 8px;

      //5% opacity
      background-color: ${Colors.AccentLight}0C;
    `}
`;
