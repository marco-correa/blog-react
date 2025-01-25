import { ReactNode } from 'react';
import { Colors } from '@/styles/tokens';
import { Anatomy } from './Typography.styles';
import {
  TypographyProps as TypographyTypes,
  TypographyVariant,
} from './Typography.types';

const elementTypeMapping = {
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  bodyLarge: 'p',
  bodyLargeBold: 'p',
  bodySmall: 'p',
  caption: 'label',
};

const getElementType = (variant: TypographyVariant) =>
  elementTypeMapping[variant];

interface TypographyProps {
  variant?: TypographyTypes['variant'];
  color?: TypographyTypes['color'];
  children: ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'bodyLarge',
  color = Colors.PrimaryDark,
  children,
}) => {
  const elementType = getElementType(variant);

  return (
    <Anatomy $variant={variant} $color={color} as={elementType}>
      {children}
    </Anatomy>
  );
};
