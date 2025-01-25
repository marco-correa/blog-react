import { Link, Outlet } from 'react-router-dom';
import { AppRoutes } from '@/router';
import { Content } from './AppContainer.styles';
import { Navbar } from '../Navbar';

export const AppContainer = () => (
  <>
    <Navbar />
    <nav>
      <div>
        <Link to={AppRoutes.Home}>Home</Link>
      </div>
      <div>
        <Link to={`${AppRoutes.Post}/123`}>Post 123</Link>
      </div>
      <div>
        <Link to="not-found-page">Not found page</Link>
      </div>
    </nav>

    <Content>
      <Outlet />
    </Content>
  </>
);
