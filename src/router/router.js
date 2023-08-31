import { Navigate } from 'react-router-dom';
import { PATHS } from './pathes';
import { lazy } from 'react';
const LoginPage = lazy(() => import('../pages/LoginPage'));
const SignupPage = lazy(() => import('../pages/SignupPage'));
const GamesPage = lazy(() => import('../pages/GamesPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const UsersPage = lazy(() => import('../pages/UsersPage'));
const GamesOutlet = lazy(() => import('../components/GamesOutlet'));
const GuestGuard = lazy(() => import('../components/Guards/GuestGuard'));
const UserGuard = lazy(() => import('../components/Guards/UserGaurd'));
const AdminGuard = lazy(() => import('../components/Guards/AdminGuard'));
const NotFound = lazy(() => import('../pages/NotFound'));

const authRoutes = [
  {
    path: PATHS.LOGIN,
    element: (
      <GuestGuard>
        <LoginPage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.SIGNUP,
    element: (
      <GuestGuard>
        <SignupPage />
      </GuestGuard>
    ),
  },
];
export const routes = [
  ...authRoutes,
  {
    path: PATHS.HOME,
    element: (
      <UserGuard>
        <GamesPage />
      </UserGuard>
    ),
    children: [
      {
        index: true,
        element: <GamesOutlet />,
      },
      {
        path: PATHS.PROFILE,
        element: <ProfilePage />,
      },
      {
        path: PATHS.USERS,
        element: (
          <AdminGuard>
            <UsersPage />
          </AdminGuard>
        ),
      },
    ],
  },
  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: <NotFound />,
  },
  {
    path: '*',
    element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />,
  },
];
