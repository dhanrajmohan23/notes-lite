import { Button, Input, styled } from "@mui/material";
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
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "1rem",
  }));

  export const PostButton = styled(Button)(() => ({
    color: "white",
    background: "#b6a5ff",
    width: "8rem",
    justifySelf: "flex-end",
    textTransform: "none",
  }));

  export const CustomInput = styled(Input)(() => ({
    width: "100%",
    background: "#ffffff",
    padding: "1rem",
    borderRadius: "0.3rem",
  }));

  export const DataGrid = styled(Box)(() => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "1rem",
    padding: "1rem 0 ",
  }));

  export const NotesContainer = styled(Box)(() => ({
    background: "#ffffff",
    minHeight: "10rem",
    borderRadius: "0.3rem",
    padding: "0.5rem",
    height: "100%",
  }));
}
