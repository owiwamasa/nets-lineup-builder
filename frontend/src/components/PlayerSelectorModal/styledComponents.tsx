import { styled } from "@mui/system";
import { Modal, ModalProps, Button, Box } from "@mui/material";
import { theme } from "../../utils";

interface Props {
  showModal: boolean;
}

export const ModalContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "showModal",
})(({ showModal }: Props) => ({
  width: "100%",
  height: "100vh",
  position: "absolute",
  zIndex: 3,
  backgroundColor: "rgb(0, 0, 0, 0.8)",
  display: showModal ? "block" : "none",
}));

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
}));

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
