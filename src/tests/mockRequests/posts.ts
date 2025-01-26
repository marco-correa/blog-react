import { http, HttpResponse } from 'msw';
import { ApiEndpoints } from '@/services';
import { Post } from '@/types';

export const postsResolver = {
  GET: {
    success: (postsFixture: Post[]) =>
      http.get(`*${ApiEndpoints.Posts}`, () =>
        HttpResponse.json([...postsFixture])
      ),
    error: () => http.get(`*${ApiEndpoints.Posts}`, () => HttpResponse.error()),
  },
};

export const postByIdResolver = {
  GET: {
    success: (postFixture: Post) =>
      http.get(`*${ApiEndpoints.Posts}/*`, () =>
        HttpResponse.json(postFixture)
      ),
    error: () =>
      http.get(`*${ApiEndpoints.Posts}/*`, () => HttpResponse.error()),
  },
};
