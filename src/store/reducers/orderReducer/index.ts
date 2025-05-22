import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { OrderType } from '../../../shared/types/OrderType';

interface OrderState {
  orders: OrderType[];
}

const initialState: OrderState = {
  orders: [],
};

export const counterSlice = createSlice({
  name: 'orderReducer',
  initialState,
  reducers: {
    setOrdersAction: (state, action: PayloadAction<OrderType[]>) => {
      state.orders = action.payload;
    },
  },
});

export const { setOrdersAction } = counterSlice.actions;

export default counterSlice.reducer;