import { ApiEndpoints } from '../endpoints';
import { httpInstance } from '../setup';
import { Author } from '@/types';

export const getAuthors = async (): Promise<Author[]> => {
  const { data } = await httpInstance.get(ApiEndpoints.Authors);

  return data;
};
