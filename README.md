# How to use it

`npm start` to run the project

`npm test` to run all the tests

`npm run test:ui` to run the tests with Vitest UI with coverage

# App routes

`/` to show the home page

`/post/:postId` to show one post with its own content

`/*` for any other route, it will show the `404` not found page. Example: `/abc`, `/not-found`, etc

# Features not implmented

Due to time constraints, some features were not implemented or were partially implemented:

- Search input and sort selector were not implemented;
- Category and author dropdowns filters were not implemented on the mobile version, only on the desktop;
- HTTP state as query params for the filters were not implemeted, so the filters were stored only on Redux in this version;
- Integrations tests on home and post pages were not implemented, only unit tests on other several components;
- Empty state when the list with the filters used does not return a single item.

# Technical choices

- `typescript`, `styled-components`, `vite`, `vitest`, `testing library`, `date-fns` and `react router v6`
- `axios` and `react query` to deal with the resquests
- `redux toolkit` to store the categories and authors filters
- `msw` to deal with the mock services on tests

# Tests coverage

Coverage running `npm run test:ui`

![image](https://github.com/marco-correa/blog-react/blob/main/doc/coverage.jpg)
