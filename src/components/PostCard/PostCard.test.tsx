import { renderer } from '@/tests/utils';
import { singlePostFixture } from '@/tests/fixtures';
import { PostCard } from './PostCard';

const post = singlePostFixture;

const setup = (
  {
    id = post.id,
    title = post.title,
    content = post.content,
    authorName = post.author.name,
    createdAt = post.createdAt,
    thumbnailUrl = post.thumbnail_url,
    categories = post.categories,
  } = {} as Partial<React.ComponentProps<typeof PostCard>>
) => {
  return {
    ...renderer(
      <PostCard
        id={id}
        title={title}
        content={content}
        authorName={authorName}
        createdAt={createdAt}
        thumbnailUrl={thumbnailUrl}
        categories={categories}
      />
    )
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
