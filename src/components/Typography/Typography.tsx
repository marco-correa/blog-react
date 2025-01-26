import { ReactNode } from 'react';
import { Colors } from '@/styles/tokens';
import { Anatomy } from './Typography.styles';
import {
  TypographyProps as TypographyTypes,
  TypographyVariant,
} from './Typography.types';

const elementTypeMapping = {
  ['heading-1']: 'h1',
  ['heading-2']: 'h2',
  ['heading-3']: 'h3',
  ['body-large']: 'p',
  ['body-large-bold']: 'p',
  ['body-small']: 'p',
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
  variant = 'body-large',
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
