import axios from "axios";
import { AppDispatch } from "..";
import Cookies from "js-cookie";
import {
  setCurrentUserEmail,
  setCurrentUserName,
  setIsLogged,
  setUserToken,
} from "./appSlice";

export const handleLogin =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
          email: email,
          password: password,
        })
        .then((res) => {
          Cookies.set("userToken", res?.data?.token, { expires: 1 });
          Cookies.set("userId", res?.data?.user?.userId, { expires: 1 });
          dispatch(setIsLogged(true));
          dispatch(setUserToken(res?.data?.token));
          dispatch(setCurrentUserName(res?.data?.user?.userName));
          dispatch(setCurrentUserEmail(res?.data?.user?.email));
        });
    } catch (err) {
      console.log(err);
    }
  };
