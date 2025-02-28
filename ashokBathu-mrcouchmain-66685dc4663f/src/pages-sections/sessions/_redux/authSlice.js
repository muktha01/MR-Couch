/* eslint-disable no-param-reassign */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialProductsState = {
  auth: undefined,
  token: undefined,
  authStatus: "",
  VerifyOTP: "",
  SendMobileOTP: "",
  VerifyMobile: "",
  newPassword: [],
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const AuthSlice = createSlice({
  name: "Auth",
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

    fetchedSignUp: (state, action) => {
      const { data } = action.payload;
      state.auth = data?.user;
      state.token = data?.jwt;
    },
    fetchedSignIn: (state, action) => {
      const data = action.payload;
      //console.log(data, "fata");
      state.auth = data?.user;
      state.token = data?.jwt;
    },
    fetchedUserData: (state, action) => {
      const { data } = action.payload;
      state.auth = data;
    },
    fetchedUserStatus: (state, action) => {
      //console.log(action.payload, "action");
      const data = action.payload;
      state.authStatus = data;
    },
    fetchedSignUPOTP: (state, action) => {
      //console.log(action.payload, "action");
      const data = action.payload;
      state.SendMobileOTP = data;
    },
    fetchedVerifyOTP: (state, action) => {
      //console.log(action.payload, "action");
      const data = action.payload;
      state.VerifyOTP = data;
    },
    verifiedMobileNumber: (state, action) => {
      //console.log(action.payload, "action");
      const data = action.payload;
      state.VerifyMobile = data;
    },
    updatedPassword: (state, action) => {
      const { data } = action.payload;
      state.newPassword = data;
    },
  },
});
