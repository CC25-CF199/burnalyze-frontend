import { createBrowserRouter, Outlet } from 'react-router-dom';

import { ExampleContainer } from '../containers';

const Router = createBrowserRouter([
  {
    element: (
      // Public Route
      <Outlet />
    ),
    children: [
      {
        path: 'Example',
        Component: ExampleContainer,
      },
    ],
  },
  {
    element: (
      // Protected Route
      <Outlet />
    ),
    children: [
      {
        path: '/',
        Component: ExampleContainer,
      },
    ],
  },
]);

export default Router;
