import { Colors } from '@/styles/tokens';

export type TypographyVariant =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'bodyLarge'
  | 'bodyLargeBold'
  | 'bodySmall'
  | 'caption';

export interface TypographyProps {
  variant: TypographyVariant;
  color: Colors;
}
