import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './styles';
import { router } from './router';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <RouterProvider router={router} />
  </QueryClientProvider>
);
