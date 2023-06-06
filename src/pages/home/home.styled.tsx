import { Input, styled } from "@mui/material";
import { Box } from "@mui/material";

export namespace S {
  export const MainContainer = styled(Box)(() => ({
    background: "lavender",
    width: "100%",
    padding: "2rem",
  }));

  export const InputContainer = styled(Box)(() => ({
    background: "lavender",
    width: "100%",
  }));

  export const CustomInput = styled(Input)(() => ({
    width: "100%",
    background: "#ffffff",
    padding: "1rem",
    borderRadius: "0.3rem",
  }));
}
