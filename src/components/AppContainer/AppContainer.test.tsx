import { renderer } from '@/tests/utils';
import { AppContainer } from './AppContainer';

const setup = () => {
  return {
    ...renderer(<AppContainer />)
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
