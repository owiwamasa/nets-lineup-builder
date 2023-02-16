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
}));

interface StyledButtonProps {
  showModal: boolean;
}

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "showModal",
})(({ showModal }: StyledButtonProps) => ({
  [theme.breakpoints.up("xl")]: {
    display: "none",
  },
  display: showModal ? "none" : "block",
  position: "absolute",
  top: showModal ? 0 : 20,
  left: showModal ? 330 : 20,
}));
