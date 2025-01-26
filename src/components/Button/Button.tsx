import { ReactNode } from 'react';
import { ButtonProps as ButtonTypes } from './Button.types';
import { Anatomy } from './Button.styles';

interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: ButtonTypes['variant'];
  icon?: ReactNode;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  icon,
  children,
  ...otherProps
}) => (
  <Anatomy $variant={variant} {...otherProps}>
    {icon}
    {children}
  </Anatomy>
);
