import { Typography, styled } from "@mui/material";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

export namespace S {
  export const SideBarContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem 0",
    transition: "0.8s",
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
