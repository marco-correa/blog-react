import { ReactNode } from 'react';

interface ButtonProps extends React.ComponentProps<'button'> {
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => <button {...props} />;
