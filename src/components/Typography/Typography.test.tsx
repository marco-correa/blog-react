import { renderer } from '@/tests/utils';
import { Colors } from '@/styles/tokens';
import { TypographyVariant } from './Typography.types';
import { Typography } from './Typography';

const setup = (
  props = {} as Partial<React.ComponentProps<typeof Typography>>
) => {
  return {
    ...renderer(<Typography {...props}>text example</Typography>).render(),
  };
};

describe('when rendering', () => {
  describe('and does not receive props', () => {
    it('renders the component', () => {
      expect(() => {
        setup();
      }).not.toThrow();
    });
  });

  describe('and receives props', () => {
    it('renders the component', () => {
      expect(() => {
        setup({ variant: 'heading2', color: Colors.PrimaryMedium });
      }).not.toThrow();
    });

    describe('and should render with all variant options', () => {
      it.each([
        'heading1',
        'heading2',
        'heading3',
        'bodyLarge',
        'bodyLargeBold',
        'bodySmall',
        'caption',
      ] as TypographyVariant[])('renders the variant %s', (variant) => {
        expect(() => {
          setup({ variant });
        }).not.toThrow();
      });
    });
  });
});
