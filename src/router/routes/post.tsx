import { AppRoutes } from '../AppRoutes';
import { Post } from '@/pages/Post';

export const postRoutes = [
  {
    path: `${AppRoutes.Post}/:postId`,
    element: <Post />,
  },
];
