import { setupServer } from 'msw/node';
import { screen, waitFor } from '@testing-library/react';
import { renderer } from '@/tests/utils';
import { PostsList } from './PostsList';
import { postsResolver } from '@/tests/mockRequests';
import { postsFixture } from '@/tests/fixtures';

const setup = (
  props = {} as Partial<React.ComponentProps<typeof PostsList>>
) => {
  return {
    ...renderer(<PostsList {...props} />)
      .withReactQuery()
      .withRouter()
      .render(),
  };
};

describe('when rendering', () => {
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

  describe('and does not provide the max prop', () => {
    it('renders the full list', async () => {
      setup();

      await waitFor(() => {
        expect(screen.getByText(postsFixture[0].title)).toBeInTheDocument();
      });
    });
  });

  describe('and provides the max prop', () => {
    it('renders the list with limited size', async () => {
      const max = 2;
      setup({ max });

      await waitFor(() => {
        expect(screen.getAllByTestId('post-card').length).toEqual(max);
      });
    });
  });
});
