import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Route } from 'react-router-dom';
import { renderer, RouterOptions } from '@/tests/utils';
import { NotFound } from './NotFound';

const HomePage = <Route index={true} element={<div>Home page</div>} />;

const setup = ({ routerOptions }: { routerOptions?: RouterOptions } = {}) => {
  return {
    ...renderer(<NotFound />)
      .withRouter(routerOptions)
      .render(),
    user: userEvent.setup(),
  };
};

describe('when rendering', () => {
  it('renders the component', () => {
    expect(() => {
      setup();
    }).not.toThrow();
  });

  describe('and clicks to go to the homepage', () => {
    it('renders the new page', async () => {
      const { user } = setup({
        routerOptions: {
          initialRoute: '/not-found',
          path: '*',
          extraRoutes: HomePage,
        },
      });

      await user.click(
        screen.getByRole('button', {
          name: /go to the home page/i,
        })
      );

      expect(screen.getByText(/home page/i)).toBeInTheDocument();
    });
  });
});
