import type { RouteObject } from 'react-router-dom';

import LoginScreen from './screens/LoginScreen';

export const LogintRoutesEnum = {
  LOGIN: '/login',
} as const;

export const loginRoutes: RouteObject[] = [
  {
    path: LogintRoutesEnum.LOGIN,
    element: <LoginScreen />,
  },
];
