import { ApiEndpoints } from '@/services';
import { getPosts } from '@/services/api/posts';
import { useQuery } from '@tanstack/react-query';

export const usePostsList = (max?: number) => {
  const { data: posts, isPending } = useQuery({
    queryKey: [ApiEndpoints.Posts],
    queryFn: getPosts,
  });

  const postsSlice = max ? posts?.slice(0, max) : posts;

  return {
    isPending,
    posts: postsSlice,
  };
};
