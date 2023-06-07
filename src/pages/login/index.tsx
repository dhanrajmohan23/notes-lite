import { useState } from "react";
import { TextField } from "@mui/material";
import { S } from "./login.styled";

export const Login = () => {
  const [showLogin, setShowLogin] = useState<boolean>(true);

  const handleShowLoginToggle = () => {
    setShowLogin(!showLogin);
  };
  return (
    <S.MainContainer>
      <S.LoginLeftContainer>
        <S.TitleText>{showLogin ? "Login" : "Create Account"}</S.TitleText>
        {!showLogin && (
          <TextField id="outlined-basic" label="User name" variant="outlined" />
        )}
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <S.LoginBtn>{showLogin ? "Log In" : "Create Account"}</S.LoginBtn>
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
