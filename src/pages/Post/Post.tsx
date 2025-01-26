import { format } from 'date-fns';

import { Button } from '@/components/Button';
import { SystemIcon } from '@/components/SystemIcon';
import { usePostPage } from './Post.hook';
import {
  AuthorIcon,
  AuthorWrapper,
  Container,
  Content,
  Image,
  Line,
  ListWrapper,
  Wrapper,
} from './Post.styles';
import { Typography } from '@/components/Typography';
import Loading from '@/assets/spinner.svg';
import { Colors } from '@/styles/tokens';
import { PostsList } from '@/components/PostsList';

export const Post = () => {
  const { isPending, post, handleBackButton } = usePostPage();

  if (isPending) {
    return <Loading />;
  }

  return (
    <Container>
      <Button
        variant="secondary"
        icon={<SystemIcon type="arrow" />}
        onClick={handleBackButton}
      >
        Back
      </Button>
      <Content>
        <Wrapper>
          <Typography variant="heading-1">{post?.title}</Typography>

          <AuthorWrapper>
            <AuthorIcon src={post?.author.profilePicture} alt="" />

            <Typography variant="body-large">
              Written by: <strong>{post?.author.name}</strong>
            </Typography>

            {post?.author.createdAt && (
              <Typography color={Colors.NeutralExtraDark}>
                {format(post.author.createdAt, 'MMM dd, yyyy')}
              </Typography>
            )}
          </AuthorWrapper>

          <Image src={post?.thumbnail_url} alt="" />

          <Typography variant="body-large">
            <span
              dangerouslySetInnerHTML={{
                __html: post?.content.replace(/\n/g, '<br />') || '',
              }}
            />
          </Typography>
        </Wrapper>

        <Line />

        <ListWrapper>
          <Typography variant="heading-2">Latest articles</Typography>

          <PostsList max={3} />
        </ListWrapper>
      </Content>
    </Container>
  );
};
