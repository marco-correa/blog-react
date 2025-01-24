import { RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './styles';
import { router } from './router/router';

export const App = () => (
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);
