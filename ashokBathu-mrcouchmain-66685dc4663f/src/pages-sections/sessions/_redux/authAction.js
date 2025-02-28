/* eslint-disable import/prefer-default-export */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */

import swal from "sweetalert";
import * as requestFromServer from "./authCrud";
import { AuthSlice, callTypes } from "./authSlice";

const { actions } = AuthSlice;

export const fetchRegister = (signdata) => (dispatch) =>
  requestFromServer
    .RegisterUser(signdata)
    .then((response) => {
      console.log(response, "RegisterData");
      if (response?.status === 200) {
        swal("User Registered Successfully");
      }
      const { data } = response;
      dispatch(actions.fetchedSignUp({ data }));
      dispatch(actions.fetchedUserStatus(response?.statusText));
    })
    .catch((error) => {
      console.log("error", error);
      swal(error?.message);
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });

export const fetchSignIn = (signdata) => (dispatch) =>
  dispatch(actions.fetchedSignIn(signdata));
// requestFromServer
//   .signin(signdata)
//   .then((response) => {
//     const { data } = response;
//     //console.log(response, "RegisterData");
//     dispatch(actions.fetchedSignIn({ data }));
//     dispatch(actions.fetchedUserStatus(response?.statusText));
//   })
//   .catch((error) => {
//     //console.log("error", error);
//     alert(error.response.data.message[0].messages[0].message);
//     // eslint-disable-next-line no-param-reassign
//     error.clientMessage = "Can't find";
//     dispatch(actions.catchError({ error, callType: callTypes.list }));
// });

export const fetchUserData = (id, token) => (dispatch) =>
  requestFromServer
    .getUserData(id, token)
    .then((response) => {
      const { data } = response;
      console.log(response, "response");
      dispatch(actions.fetchedUserData({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });

export const fetchSignUPOTP = (signdata) => (dispatch) =>
  requestFromServer
    .SendOTPForMobile(signdata)
    .then((response) => {
      const { data } = response;
      //console.log(response, "RegisterData");
      dispatch(actions.fetchedSignUPOTP({ data }));
      // dispatch(actions.fetchedUserStatus(response?.statusText));
    })
    .catch((error) => {
      //console.log("error", error);
      // alert(error.response.data.message[0].messages[0].message);
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
export const fetchVerifyOTP = (signdata) => (dispatch) =>
  requestFromServer
    .VerifyOTPForMobile(signdata)
    .then((response) => {
      const { data } = response;
      //console.log(response, "RegisterData");
      // dispatch(actions.fetchedVerifyOTP({ data }));
      dispatch(actions.fetchedVerifyOTP(data?.message));
    })
    .catch((error) => {
      //console.log("error", error);
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
export const verifyMobileNumber = (signdata) => (dispatch) =>
  requestFromServer
    .getMobileNumber(signdata)
    .then((response) => {
      const { data } = response;
      //console.log(data, "RegisterData");
      // dispatch(actions.fetchedVerifyOTP({ data }));
      dispatch(actions.verifiedMobileNumber({ data }));
    })
    .catch((error) => {
      //console.log("error", error);
      // alert(error.response.data.message[0].messages[0].message);
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
export const resetPassword = (id, updatedData) => (dispatch) =>
  requestFromServer
    .updatePassword(id, updatedData)
    .then((response) => {
      const { data } = response;
      //console.log("edit user profile", data);
      dispatch(actions.updatedPassword({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
