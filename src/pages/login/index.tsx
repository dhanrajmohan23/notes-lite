import { useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { S } from "./login.styled";
import axios from "axios";
import { handleLogin } from "../../store/app/app.actions";
import { useDispatch } from "react-redux";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { AppDispatch } from "../../store";

export const Login = () => {
  // State values
  const [showLogin, setShowLogin] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  //   Functions
  const handleShowLoginToggle = () => {
    setShowLogin(!showLogin);
    setUserName("");
    setEmail("");
    setPassword("");
  };

  // const handleLogin = () => {
  //   try {
  //     axios
  //       .post(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
  //         email: email,
  //         password: password,
  //       })
  //       .then((res) => {
  //         Cookies.set("userToken", res?.data?.token, { expires: 1 });
  //         Cookies.set("userId", res?.data?.user?.userId, { expires: 1 });
  //         dispatch(setIsLogged(true));
  //         dispatch(setUserToken(res?.data?.token));
  //         dispatch(setCurrentUserName(res?.data?.user?.userName));
  //         dispatch(setCurrentUserEmail(res?.data?.user?.email));
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
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
        {/* <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          endAdornment={<InputAdornment position="end">eye</InputAdornment>}
        /> */}
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <S.LoginBtn
          onClick={() =>
            showLogin
              ? dispatch(handleLogin(email, password))
              : handleRegister()
          }
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
