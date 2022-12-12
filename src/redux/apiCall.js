import { publicRequest } from "../requestMethods";
import { loginStart, loginFailure, loginSuccess } from "./userRedux";
export const login = async (dispatch, user) => {
  try {
    dispatch(loginStart());
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    return res;
  } catch (err) {
    dispatch(loginFailure(err.message));
    return err;
  }
};
