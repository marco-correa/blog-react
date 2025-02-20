import { renderer } from '@/tests/utils';
import { Navbar } from './Navbar';

const setup = () => {
  return {
    ...renderer(<Navbar />)
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
