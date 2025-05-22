import { useDispatch } from 'react-redux';

import { setOrdersAction } from '.';
import type { OrderType } from '../../../shared/types/OrderType';
import { useAppSelector } from '../../hooks';

export const useOrderReducer = () => {
  const dispatch = useDispatch();
  const { orders } = useAppSelector((state) => state.orderReducer);

  const setOrders = (orders: OrderType[]) => {
    dispatch(setOrdersAction(orders));
  };

  return {
    orders,
    setOrders,
  };
};
