import { httpInstance } from '../setup';
import { ApiEndpoints } from '../endpoints';
import { Post } from '@/types';

export const getPosts = async (): Promise<Post[]> => {
  const { data } = await httpInstance.get(ApiEndpoints.Posts);

  return data;
};

export const getPostById = async (
  postId: string | undefined
): Promise<Post> => {
  const { data } = await httpInstance.get(`${ApiEndpoints.Posts}/${postId}`);

  return data;
};
