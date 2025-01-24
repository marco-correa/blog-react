import { createBrowserRouter } from 'react-router-dom';

import { AppContainer } from '@/components/AppContainer';
import { AppRoutes } from './AppRoutes';
import { Home } from '@/pages/Home';
import { NotFound } from '@/pages/NotFound';
import { postRoutes } from './routes';

export const router = createBrowserRouter([
  {
    path: AppRoutes.Home,
    element: <AppContainer />,
    children: [
      { index: true, element: <Home /> },
      ...postRoutes,
      { path: '*', element: <NotFound /> },
    ],
  },
]);
