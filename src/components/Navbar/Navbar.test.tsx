import { renderer } from '@/tests/utils';
import { Navbar } from './';

const setup = () => {
  return {
    ...renderer(<Navbar />),
  };
};

describe('when rendering', () => {
  it('renders the component', () => {
    expect(() => {
      setup();
    }).not.toThrow();
  });
});
