import { styled } from "@mui/material";
import { Box } from "@mui/material";

export namespace S {
  export const HeaderContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    background: "orange",
    height: "10vh",
    padding: "0 1rem",
  }));
}
