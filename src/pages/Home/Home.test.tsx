import { renderer } from '@/tests/utils';
import { Home } from './Home';
import { store } from '@/store';

const setup = () => {
  return {
    ...renderer(<Home />)
      .withReactQuery()
      .withStore(store)
      .withRouter()
      .render(),
  };
};

describe('when rendering', () => {
  it('renders the component', () => {
    expect(() => {
      setup();
    }).not.toThrow();
  });
});
