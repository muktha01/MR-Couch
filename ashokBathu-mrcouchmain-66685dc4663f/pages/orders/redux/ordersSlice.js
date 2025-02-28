/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
import { createSlice } from "@reduxjs/toolkit";

const initialProductsState = {
  orders: [],
  order: {},
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const OrdersPageSlice = createSlice({
  name: "OrdersPageSlice",
  initialState: initialProductsState,

  reducers: {
    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },
    fetchedOrders: (state, action) => {
      const { data } = action.payload;
      state.orders = data;
    },

    fetchedOrderById: (state, action) => {
      const { data } = action.payload;
      state.order = data;
    },

    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },

    fetchedProducts: (state, action) => {
      const { data } = action.payload;
      state.products = data;
    },
    fetchedProductById: (state, action) => {
      const { data } = action.payload;
      state.productsById = data;
    },
  },
});
