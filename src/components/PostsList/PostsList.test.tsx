import { renderer } from '@/tests/utils';
import { PostsList } from './PostsList';
import { postsFixture } from '@/tests/fixtures';

const setup = (
  { posts = postsFixture } = {} as Partial<
    React.ComponentProps<typeof PostsList>
  >
) => {
  return {
    ...renderer(<PostsList posts={posts} />)
      .withRouter()
      .render(),
  };
};

describe('when rendering', () => {
  it('renders the component', () => {
    expect(() => {
      setup();
    }).not.toThrow();
  });
});
