import { renderer } from '@/tests/utils';
import { SystemIcon } from './SystemIcon';

const setup = () => {
  return {
    ...renderer(<SystemIcon type="arrow" />).render(),
  };
};

describe('when rendering', () => {
  it('renders the component', () => {
    expect(() => {
      setup();
    }).not.toThrow();
  });
});
