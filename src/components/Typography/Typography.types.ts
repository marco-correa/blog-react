import { Colors } from '@/styles/tokens';

export type TypographyVariant =
  | 'heading-1'
  | 'heading-2'
  | 'heading-3'
  | 'body-large'
  | 'body-small'
  | 'caption';

export interface TypographyProps {
  variant: TypographyVariant;
  color: Colors;
}
