import axios from "axios";

export const SIGNUP = "http://3.0.78.116:8080/auth/local/register";
export const LOGIN = "http://3.0.78.116:8080/auth/local";
// eslint-disable-next-line import/prefer-default-export
export function RegisterUser(data) {
  const registerData = {
    username: data.username,
    email: data.email,
    password: data.password,
    mobile: data.mobile,
  };
  return axios.post(SIGNUP, registerData);
}

export function signin(signdata) {
  const data = {
    identifier: signdata.phoneNumber,
    password: signdata.password,
  };
  return axios.post(SignIn, data);
}

export function getUserData(id, token) {
  return axios.get(`${userData}/${id}`, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function SendOTPForMobile(mobile) {
  const data = {
    mobile,
  };
  return axios.post(SendMobileOTP, data);
}

export function VerifyOTPForMobile(data) {
  return axios.post(VerifyMobileOTP, data);
}

export function getMobileNumber(number) {
  const obj = {};
  obj.mobile = number;
  return axios.post(VerifyMobileNumber, obj);
}

export function updatePassword(id, updatedData) {
  const obj = {};
  obj.password = updatedData;
  return axios.put(`${userData}/${id}`, obj);
}
