import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export interface RouterOptions {
  initialRoute?: string;
  path?: string;
  extraRoutes?: ReactNode;
}

class Renderer {
  result: ReactNode;

  constructor(children: ReactNode) {
    this.result = children;
  }

  withRouter({
    initialRoute = '/',
    path = '/',
    extraRoutes = null,
  }: RouterOptions = {}) {
    this.result = (
      <MemoryRouter initialEntries={[initialRoute]}>
        <Routes>
          <Route path={path} element={this.result} />
          {extraRoutes}
        </Routes>
      </MemoryRouter>
    );

    return this;
  }

  withReactQuery() {
    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });

    this.result = (
      <QueryClientProvider client={queryClient}>
        {this.result}
      </QueryClientProvider>
    );

    return this;
  }

  render() {
    return render(this.result);
  }
}

export const renderer = (children: ReactNode) => new Renderer(children);
