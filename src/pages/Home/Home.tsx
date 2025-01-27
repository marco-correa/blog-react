import { PostsList } from '@/components/PostsList';
import { Typography } from '@/components/Typography';
import { Container, HeaderWrapper } from './Home.styles';
import { useHomePage } from './Home.hook';
import { Loading } from '@/components/Loading';
import { HiddenOnMobile } from '@/components/HiddenOnMobile';
import { Filters } from './Filters';

export const Home = () => {
  const { categories, authors, posts, isPending } = useHomePage();

  if (isPending) {
    return <Loading />;
  }

  return (
    <Container>
      <HeaderWrapper>
        <HiddenOnMobile>
          <Typography variant="heading-2">DWS blog</Typography>
        </HiddenOnMobile>
      </HeaderWrapper>

      <HiddenOnMobile>
        <Filters categories={categories} authors={authors} />
      </HiddenOnMobile>

      <PostsList posts={posts} />
    </Container>
  );
};
