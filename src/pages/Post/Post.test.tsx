import { renderer } from '@/tests/utils';
import { Post } from './Post';

const setup = () => {
  return {
    ...renderer(<Post />)
      .withReactQuery()
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
