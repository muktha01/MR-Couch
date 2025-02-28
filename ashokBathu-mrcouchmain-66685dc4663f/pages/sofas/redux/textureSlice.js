/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
import { createSlice } from "@reduxjs/toolkit";

const initialProductsState = {
  texture: [],
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const TexturePageSlice = createSlice({
  name: "TexturePageSlice",
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
    fetchedTexture: (state, action) => {
      const { data } = action.payload;
      state.texture = data;
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
