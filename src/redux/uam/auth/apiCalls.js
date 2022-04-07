import { loginFailure, loginStart, loginSuccess, logOutFailure, logOutStart, logOutSuccess } from "./authReducer";
import dynamic from "next/dynamic";

import { publicRequest, userRequest } from "../../../../requestMethods";


export const login = async (dispatch, user) => {
  dispatch(loginStart());
  console.log("Public Request" + publicRequest)
  try {
    const res = await userRequest.post("/user/login", user);
    console.log(res)
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logOut = async (dispatch) => {
  console.log("Token in apicall is" + dispatch)
  dispatch(logOutStart());
  try {
    const res = 'ok';
    console.log(res)
    dispatch(logOutSuccess(res));
  } catch (err) {
    dispatch(logOutFailure());
  }
};
