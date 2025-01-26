import { ReactNode } from 'react';
import { Typography } from '../Typography';
import { Container } from './Tag.styles';
import { Colors } from '@/styles/tokens';

interface TagProps {
  children: ReactNode;
}

export const Tag: React.FC<TagProps> = ({ children }) => (
  <Container>
    <Typography variant="caption" color={Colors.NeutralExtraDark}>
      {children}
    </Typography>
  </Container>
);
