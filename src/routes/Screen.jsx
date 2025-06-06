import { createBrowserRouter, Outlet } from 'react-router-dom';

import {
  ExampleContainer,
  DetectionContainer,
  DetectionResultContainer,
  CameraContainer,
} from '../containers';

import { MainLayout, ProtectedResult } from '../components/templates';

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
        children: [
          {
            path: '',
            Component: DetectionContainer,
          },
          {
            path: 'camera',
            Component: CameraContainer,
          },
          {
            path: 'result',
            element: (
              <ProtectedResult>
                <DetectionResultContainer />
              </ProtectedResult>
            ),
          },
        ],
      },
    ],
  },
]);

export default Router;
