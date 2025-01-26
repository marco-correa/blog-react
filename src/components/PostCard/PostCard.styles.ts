import { breakpoints } from '@/styles';
import { Colors, Spacings } from '@/styles/tokens';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;

  grid-column: span 12;

  ${breakpoints.md} {
    grid-column: span 6;
  }

  ${breakpoints.lg} {
    grid-column: span 4;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: inherit;
  color: inherit;
`;

export const Wrapper = styled.div`
  background-color: ${Colors.NeutralLightest};
  display: flex;
  flex-direction: column;
  gap: ${Spacings.Normal};
  padding: ${Spacings.Normal};
`;

export const Image = styled.img`
  width: 100%;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${Spacings.Small};
`;

export const AuthorDot = styled.div`
  background-color: ${Colors.SecondaryMedium};
  height: 5px;
  width: 5px;
  border-radius: 20px;
`;

export const TextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacings.Small};
`;

export const TitleWrapper = styled.span`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ContentWrapper = styled.span`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  gap: ${Spacings.ExtraSmall};
  flex-wrap: wrap;
`;
