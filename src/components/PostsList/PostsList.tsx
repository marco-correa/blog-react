import { usePostsList } from './PostsList.hook';
import { PostCard } from '../PostCard';
import Loading from '@/assets/spinner.svg';
import { Container } from './PostsList.styles';

export interface PostsListProps {
  max?: number;
}

export const PostsList: React.FC<PostsListProps> = ({ max }) => {
  const { posts, isPending } = usePostsList(max);

  if (isPending) {
    return <Loading />;
  }

  return (
    <Container>
      {posts?.map(
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
};
