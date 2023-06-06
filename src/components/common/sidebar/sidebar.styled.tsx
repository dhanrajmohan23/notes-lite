import { styled } from "@mui/material";
import { Box } from "@mui/material";

export namespace S {
  export const SideBarContainer = styled(Box)(() => ({
    width: "5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem 0",
  }));
}
