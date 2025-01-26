import { faker } from '@faker-js/faker';
import { renderer } from '@/tests/utils';
import { Tag } from './Tag';

const setup = () => {
  return {
    ...renderer(<Tag>{faker.lorem.word()}</Tag>).render(),
  };
};

describe('when rendering', () => {
  it('renders the component', () => {
    expect(() => {
      setup();
    }).not.toThrow();
  });
});
