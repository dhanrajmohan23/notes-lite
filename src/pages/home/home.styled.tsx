import { Button, Input, styled } from "@mui/material";
import { Box } from "@mui/material";
import homeBg from "../../assets/images/home-bg.jpg";

export namespace S {
  export const MainContainer = styled(Box)(() => ({
    background: "lavender",
    // backgroundImage: `url(${homeBg})`,
    backgroundSize: "cover",
    backdropFilter: "blur(8px)",
    width: "100%",
    padding: "2rem",
    position: "relative",
  }));

  export const InputContainer = styled(Box)(() => ({
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
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "1rem",
    padding: "1rem 0 ",
  }));

  export const NotesContainer = styled(Box)(() => ({
    // background: "rgba( 255, 255, 255, 0.25 )",
    minHeight: "10rem",
    padding: "0.5rem",
    height: "100%",
    background: "white",
    // boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    // backdropFilter: "blur( 4px )",
    borderRadius: "10px",
    // border: " 1px solid rgba( 255, 255, 255, 0.18 )",
    // cursor: "pointer",
  }));
}
