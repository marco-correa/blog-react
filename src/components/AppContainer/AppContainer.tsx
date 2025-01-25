import { Outlet } from 'react-router-dom';
import { Content } from './AppContainer.styles';
import { Navbar } from '../Navbar';

export const AppContainer = () => (
  <>
    <Navbar />

    <Content>
      <Outlet />
    </Content>
  </>
);
