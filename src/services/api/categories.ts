import { ApiEndpoints } from '../endpoints';
import { httpInstance } from '../setup';
import { Category } from '@/types';

export const getCategories = async (): Promise<Category[]> => {
  const { data } = await httpInstance.get(ApiEndpoints.Categories);

  return data;
};
