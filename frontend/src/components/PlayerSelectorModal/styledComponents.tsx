import { styled } from "@mui/system";
import { Modal, ModalProps, Button } from "@mui/material";
import { theme } from "../../utils";

export const StyledModal = styled(Modal)<ModalProps>(() => ({
  borderRadius: "20px",
  backgroundColor: "lightgray",
  position: "absolute",
  maxWidth: "450px",
  minWidth: "400px",
  height: "60vh",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "& .MuiBackdrop-root": {
    width: "100vw",
    height: "150vh",
    position: "absolute",
    backgroundColor: "rgb(0, 0, 0, 0.8)",
    top: "-100%",
    left: "-100%",
  },
  [theme.breakpoints.up("xl")]: {
    display: "none",
  },
  [theme.breakpoints.down(1350)]: {
    height: "80vh",
    left: "20%",
    "& .MuiBackdrop-root": {
      top: "-20%",
      left: "-0%",
    },
  },
  [theme.breakpoints.down(1100)]: {
    left: "25%",
  },
  [theme.breakpoints.down(900)]: {
    left: "30%",
    "& .MuiBackdrop-root": {
      height: "200vh",
      width: "300vw",
      top: "-20%",
      left: "-20%",
    },
  },
  [theme.breakpoints.down(750)]: {
    left: "35%",
  },
  [theme.breakpoints.down(550)]: {
    "& .MuiBackdrop-root": {
      height: "200vh",
    },
    left: "50%",
  },
}));

interface Props {
  showModal: boolean;
}

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "showModal",
})(({ showModal }: Props) => ({
  [theme.breakpoints.up("xl")]: {
    display: "none",
  },
  display: showModal ? "none" : "block",
  position: "absolute",
  top: showModal ? 0 : 20,
  left: showModal ? 330 : 20,
}));
