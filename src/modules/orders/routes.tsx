import type { RouteObject } from 'react-router-dom';

import Order from './screens/Order';

export const OrderRoutesEnum = {
  ORDER: '/order',
} as const;

export const orderScreens: RouteObject[] = [
  {
    path: OrderRoutesEnum.ORDER,
    element: <Order />,
  },
];