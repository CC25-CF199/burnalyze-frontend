import { createBrowserRouter, Outlet } from 'react-router-dom';

import {
  ExampleContainer,
  DetectionContainer,
  CameraContainer,
} from '../containers';

import { MainLayout } from '../components/templates';

const Router = createBrowserRouter([
  {
    element: (
      // Public Route
      <Outlet />
    ),
    children: [
      {
        path: '/example',
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
        path: '/',
        Component: ExampleContainer,
      },
      {
        path: 'detection',
        Component: DetectionContainer,
      },
      {
        path: 'camera',
        Component: CameraContainer,
      },
    ],
  },
]);

export default Router;
