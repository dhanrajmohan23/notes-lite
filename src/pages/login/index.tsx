import { useState } from "react";
import { TextField } from "@mui/material";
import { S } from "./login.styled";
import axios from "axios";
import { setIsLogged, setUserToken } from "../../store/app/appSlice";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

export const Login = () => {
  // State values
  const [showLogin, setShowLogin] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();

  //   Functions
  const handleShowLoginToggle = () => {
    setShowLogin(!showLogin);
    setUserName("");
    setEmail("");
    setPassword("");
  };

  const handleLogin = () => {
    try {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
          email: email,
          password: password,
        })
        .then((res) => {
          Cookies.set("userToken", res?.data?.token, { expires: 1 });
          Cookies.set("userId", res?.data?.userId, { expires: 1 });
          dispatch(setIsLogged(true));
          dispatch(setUserToken(res?.data?.token));
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegister = () => {
    try {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/api/register`, {
          email: email,
          password: password,
          userName: userName,
        })
        .then((res) => {
          console.log(res, "register res");
          handleShowLoginToggle();
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.MainContainer>
      <S.LoginLeftContainer>
        <S.TitleText>{showLogin ? "Login" : "Create Account"}</S.TitleText>
        {!showLogin && (
          <TextField
            label="User name"
            variant="outlined"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        )}
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <S.LoginBtn
          onClick={() => (showLogin ? handleLogin() : handleRegister())}
        >
          {showLogin ? "Log In" : "Create Account"}
        </S.LoginBtn>
        {showLogin ? (
          <p>
            Don't have an account? &nbsp;
            <S.CreateAccountToggle onClick={handleShowLoginToggle}>
              Create Account
            </S.CreateAccountToggle>
          </p>
        ) : (
          <p>
            ALready have an account? &nbsp;
            <S.CreateAccountToggle onClick={handleShowLoginToggle}>
              Log In
            </S.CreateAccountToggle>
          </p>
        )}
      </S.LoginLeftContainer>

      <S.LoginRightContainer />
    </S.MainContainer>
  );
};
