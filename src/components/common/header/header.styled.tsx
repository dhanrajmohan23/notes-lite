import { styled } from "@mui/material";
import { Box } from "@mui/material";

export namespace S {
  export const HeaderContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    height: "8vh",
    padding: "0 1.5rem",
  }));

  export const CustomMenuIcon = styled("img")(() => ({
    cursor: "pointer",
  }));
}
