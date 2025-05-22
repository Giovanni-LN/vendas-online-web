import type { RouteObject } from 'react-router-dom';

import FirstScreen from './screens/FirstScreen';
import PageNotFound from './screens/PageNotFound';

export const FirstScreenRoutesEnum = {
  FIRST_SCREEN: '/' as const,
};

export const firstScreenRoutes: RouteObject[] = [
  {
    path: FirstScreenRoutesEnum.FIRST_SCREEN,
    element: <FirstScreen />,
    errorElement: <PageNotFound />,
  },
];
