import { createBrowserRouter, Outlet } from 'react-router-dom';

import { ExampleContainer } from '../containers';

import { MainLayout } from '../components/templates';

const Router = createBrowserRouter([
  {
    element: (
      // Public Route
      <Outlet />
    ),
    children: [
      {
        path: '/',
        Component: ExampleContainer,
      },
    ],
  },
  {
    element: (
      // Protected Route
      <MainLayout />
    ),
    children: [
      {
        path: 'Example',
        Component: ExampleContainer,
      },
    ],
  },
]);

export default Router;
