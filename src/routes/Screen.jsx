import { createBrowserRouter, Outlet } from 'react-router-dom';

import {
  ExampleContainer,
  DetectionContainer,
  DetectionResultContainer,
  DetectionHistoryContainer,
  HistoryDetailsContainer,
  CameraContainer,
  LoginContainer,
  RegisterContainer,
  EducationContainer,
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
        path: '/login',
        Component: LoginContainer,
      },
      {
        path: '/register',
        Component: RegisterContainer,
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
        path: 'education',
        Component: EducationContainer,
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
          {
            path: 'history',
            children: [
              {
                path: '',
                Component: DetectionHistoryContainer,
              },
              {
                path: 'details/:id',
                Component: HistoryDetailsContainer,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default Router;
