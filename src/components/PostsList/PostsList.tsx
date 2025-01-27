import { PostCard } from '../PostCard';
import { Container } from './PostsList.styles';
import { Post } from '@/types';

export interface PostsListProps {
  posts: Post[];
}

export const PostsList: React.FC<PostsListProps> = ({ posts }) => (
  <Container>
    {posts.map(
      ({
        id,
        title,
        content,
        createdAt,
        categories,
        thumbnail_url,
        author: { name: authorName },
      }) => (
        <PostCard
          key={id}
          id={id}
          title={title}
          content={content}
          authorName={authorName}
          createdAt={createdAt}
          thumbnailUrl={thumbnail_url}
          categories={categories}
        />
      )
    )}
  </Container>
);
