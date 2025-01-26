import { AppRoutes } from '@/router';
import { ApiEndpoints } from '@/services';
import { getPostById } from '@/services/api/posts';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

export const usePostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const { data: post, isPending } = useQuery({
    queryKey: [ApiEndpoints.Posts, postId],
    queryFn: () => getPostById(postId),
  });

  const handleBackButton = () => {
    navigate(AppRoutes.Home);
  };

  return {
    isPending,
    post,
    handleBackButton,
  };
};
