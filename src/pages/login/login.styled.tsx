import { Button, Stack, Typography, styled } from "@mui/material";
import { Box } from "@mui/material";
import loginBg from "../../assets/images/login-bg.jpg";

export namespace S {
  export const MainContainer = styled(Box)(() => ({
    width: "100%",
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr 1.5fr",
  }));
  export const LoginLeftContainer = styled(Stack)(() => ({
    flexDirection: "column",
    justifyContent: "center",
    gap: "1rem",
    alignItems: "center",
  }));
  export const TitleText = styled(Typography)(() => ({
    fontSize: "2rem",
    fontWeight: 600,
  }));
  export const LoginBtn = styled(Button)(() => ({
    background: "#734f96",
    padding: "0.5rem 2rem",
    color: "white",
    textTransform: "none",
  }));
  export const CreateAccountToggle = styled("span")(() => ({
    color: "#734f96",
    cursor: "pointer",
  }));
  export const LoginRightContainer = styled(Box)(() => ({
    backgroundImage: `url(${loginBg})`,
    backgroundSize: "cover",
  }));
}
