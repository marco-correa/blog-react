import { breakpoints } from '@/styles';
import { Colors, Spacings } from '@/styles/tokens';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'action'
    'content';
  gap: ${Spacings.Normal};
  justify-items: start;

  ${breakpoints.md} {
    grid-template-areas: 'action content .';
    grid-template-columns: 1fr minmax(100px, auto);
    gap: ${Spacings.ExtraLarge};
    align-items: start;
  }

  ${breakpoints.lg} {
    grid-template-columns: 1fr repeat(2, minmax(100px, auto));
    gap: ${Spacings.Wide};
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: ${Spacings.Normal};

  ${breakpoints.lg} {
    gap: ${Spacings.ExtraLarge};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: ${Spacings.Normal};
`;

export const AuthorWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'icon name'
    'icon date';
  column-gap: ${Spacings.ExtraSmall};

  ${breakpoints.md} {
    column-gap: ${Spacings.Normal};
  }
`;

export const AuthorIcon = styled.img`
  width: 40px;
  height: 40px;
  grid-row: span 2;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const Line = styled.hr`
  border: 1px solid ${Colors.NeutralLight};
  height: auto;
  width: 100%;
  margin: ${Spacings.None};
`;

export const ListWrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: ${Spacings.Normal};
`;
