import { useNavigate } from 'react-router-dom';
import { Typography } from '@/components/Typography';
import { Button } from '@/components/Button';
import { AppRoutes } from '@/router';
import { Container } from './NotFound.styles';
import { SystemIcon } from '@/components/SystemIcon';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="heading-2">Page not found!</Typography>
      <Button
        variant="secondary"
        icon={<SystemIcon type="arrow" />}
        onClick={() => {
          navigate(AppRoutes.Home);
        }}
      >
        Go to the home page
      </Button>
    </Container>
  );
};
