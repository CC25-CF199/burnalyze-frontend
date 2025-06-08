import { createBrowserRouter, Outlet } from 'react-router-dom';

import { ExampleContainer, DetectionContainer, LandingContainer, ProfileContainer, SettingsContainer, EditProfileContainer, ChangePasswordContainer } from '../containers';

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
        Component: LandingContainer,
      },
      {
        path: '/example',
        Component: ExampleContainer,
      },
      {
        path: '/landing',
        Component: LandingContainer,
      },
      {
        path: '/profile',
        Component: ProfileContainer,
      },
      {
        path: '/settings',
        Component: SettingsContainer,
      },
      {
        path: '/edit-profile',
        Component: EditProfileContainer,
      },
      {
        path: '/change-password',
        Component: ChangePasswordContainer,
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
        path: 'detection',
        Component: DetectionContainer,
      },
    ],
  },
]);

export default Router;
