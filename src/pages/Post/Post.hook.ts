import { AppRoutes } from '@/router';
import { ApiEndpoints } from '@/services';
import { getPostById, getPosts } from '@/services/api/posts';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

export const usePostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const { data: post, isPending: isPostPending } = useQuery({
    queryKey: [ApiEndpoints.Posts, postId],
    queryFn: () => getPostById(postId),
  });

  const { data: posts, isPending: isPostsPending } = useQuery({
    queryKey: [ApiEndpoints.Posts],
    queryFn: getPosts,
  });

  const postsSlice = posts?.slice(0, 3) || [];

  const handleBackButton = () => {
    navigate(AppRoutes.Home);
  };

  return {
    isPending: isPostPending || isPostsPending,
    post,
    posts: postsSlice,
    handleBackButton,
  };
};
