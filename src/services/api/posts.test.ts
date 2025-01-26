import { setupServer } from 'msw/node';
import { postsFixture, singlePostFixture } from '@/tests/fixtures';
import { postByIdResolver, postsResolver } from '@/tests/mockRequests';
import { getPostById, getPosts } from './posts';

describe('when using the service', () => {
  describe('and using the getPosts function', () => {
    const server = setupServer(postsResolver.GET.success(postsFixture));

    beforeAll(() => {
      server.listen();
    });

    afterEach(() => {
      server.resetHandlers();
    });

    afterAll(() => {
      server.close();
    });

    it('returns post values', async () => {
      const result = await getPosts();

      expect(result).toEqual(postsFixture);
    });

    describe('and had a error on the request', () => {
      beforeEach(() => {
        server.use(postsResolver.GET.error());
      });

      it('throws a network error', () => {
        expect(async () => await getPosts()).rejects.toThrow();
      });
    });
  });

  describe('and using the getPostById function', () => {
    const server = setupServer(postByIdResolver.GET.success(singlePostFixture));

    beforeAll(() => {
      server.listen();
    });

    afterEach(() => {
      server.resetHandlers();
    });

    afterAll(() => {
      server.close();
    });

    it('returns post values', async () => {
      const result = await getPostById(singlePostFixture.id);

      expect(result).toEqual(singlePostFixture);
    });

    describe('and had a error on the request', () => {
      beforeEach(() => {
        server.use(postByIdResolver.GET.error());
      });

      it('throws a network error', () => {
        expect(
          async () => await getPostById(singlePostFixture.id)
        ).rejects.toThrow();
      });
    });
  });
});
