import { useNavigate } from 'react-router-dom';
import { Typography } from '@/components/Typography';
import { Button } from '@/components/Button';
import { AppRoutes } from '@/router';
import { Container } from './NotFound.styles';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="heading2">Page not found!</Typography>
      <Button
        onClick={() => {
          navigate(AppRoutes.Home);
        }}
      >
        Go to the home page
      </Button>
    </Container>
  );
};
