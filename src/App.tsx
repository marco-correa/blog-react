import { RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './styles';
import { router } from './router';

export const App = () => (
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);
