import { Link } from 'react-router-dom';
import { Header } from './Navbar.styles';
import { AppRoutes } from '@/router';
import Logo from '@/assets/logo.svg';

export const Navbar = () => {
  return (
    <Header>
      <Link to={AppRoutes.Home}>
        <Logo />
      </Link>

      {/* TO DO */}
      <div
        style={{ backgroundColor: 'gray', height: '56px', width: '400px' }}
      />
    </Header>
  );
};
