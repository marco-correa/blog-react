import { Post } from '@/types';
import {
  AuthorDot,
  AuthorWrapper,
  CategoriesWrapper,
  Container,
  ContentWrapper,
  Image,
  LinkStyled,
  TextsWrapper,
  TitleWrapper,
  Wrapper,
} from './PostCard.styles';
import { Typography } from '../Typography';
import { AppRoutes } from '@/router';
import { format } from 'date-fns';
import { Colors } from '@/styles/tokens';
import { Tag } from '../Tag';

interface PostCardProps {
  id: Post['id'];
  title: Post['title'];
  content: Post['content'];
  authorName: Post['author']['name'];
  createdAt: Post['createdAt'];
  thumbnailUrl: Post['thumbnail_url'];
  categories: Post['categories'];
}

export const PostCard: React.FC<PostCardProps> = ({
  id,
  title,
  content,
  authorName,
  createdAt,
  thumbnailUrl,
  categories,
}) => {
  return (
    <Container data-testid="post-card">
      <LinkStyled to={`${AppRoutes.Post}/${id}`}>
        <Image src={thumbnailUrl} alt="" />

        <Wrapper>
          <AuthorWrapper>
            <Typography variant="body-small" color={Colors.NeutralExtraDark}>
              {format(createdAt, 'MMM dd, yyyy')}
            </Typography>

            <AuthorDot />

            <Typography variant="body-small" color={Colors.NeutralExtraDark}>
              {authorName}
            </Typography>
          </AuthorWrapper>

          <TextsWrapper>
            <TitleWrapper>
              <Typography variant="heading-3">{title}</Typography>
            </TitleWrapper>

            <ContentWrapper>
              <Typography variant="body-small">{content}</Typography>
            </ContentWrapper>
          </TextsWrapper>

          <CategoriesWrapper>
            {categories.map(({ id, name }) => (
              <Tag key={id}>{name}</Tag>
            ))}
          </CategoriesWrapper>
        </Wrapper>
      </LinkStyled>
    </Container>
  );
};
