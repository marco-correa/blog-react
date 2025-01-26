import { faker } from '@faker-js/faker';
import { renderer } from '@/tests/utils';
import { Button } from './Button';

const setup = () => {
  return {
    ...renderer(<Button>{faker.lorem.word()}</Button>).render(),
  };
};

describe('when rendering', () => {
  it('renders the component', () => {
    expect(() => {
      setup();
    }).not.toThrow();
  });
});
