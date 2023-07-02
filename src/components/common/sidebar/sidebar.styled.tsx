import { Stack, Typography, styled } from "@mui/material";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

export namespace S {
  export const SideBarContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    // padding: "1rem 0",
    transition: "0.8s",
    borderRight: "1px solid #b7b6c4",
  }));

  export const ArrowIconContainer = styled(Box)(() => ({
    cursor: "pointer",
    background: "lavender",
    height: "2rem",
    width: "2rem",
    borderRadius: "50%",
    display: "grid",
    placeContent: "center",
    position: "absolute",
    right: "-1rem",
    bottom: "-1rem",
    zIndex: 1,
    border: "1px solid #b7b6c4",
  }));

  export const userDetailsContainer = styled(Box)(() => ({
    borderBottom: "2px solid lavender",
    padding: "1rem",
    position: "relative",
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
    transition: "0.8s",
    width: "100%",
  }));

  export const userProfileContainer = styled(Box)(() => ({
    height: "2.5rem",
    width: "2.5rem",
    borderRadius: "50%",
    background: "lavender",
  }));

  export const UserDataContainer = styled(Stack)(() => ({}));

  export const UserName = styled(Typography)(() => ({
    fontSize: "0.8rem",
    fontWeight: 600,
  }));

  export const UserEmail = styled(Typography)(() => ({
    fontSize: "0.7rem",
    color: "#bfbccc",
  }));

  export const CustomIcon = styled(motion.img)(() => ({
    cursor: "pointer",
  }));

  export const LabelContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "flex-start",
    gap: "0.5rem",
    alignItems: "center",
    width: "100%",
    padding: "0 1.5rem",
    transition: "0.8s",
  }));

  export const SidebarLabel = styled(Typography)(() => ({}));
}
