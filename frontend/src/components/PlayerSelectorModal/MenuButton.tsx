import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { StyledButton } from "./styledComponents";

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuButton = ({ showModal, setShowModal }: Props) => {
  return (
    <StyledButton
      disableRipple
      showModal={showModal}
      onClick={() => setShowModal(!showModal)}
    >
      <MenuIcon
        sx={{
          color: "white",
          fontSize: "36px",
        }}
      />
    </StyledButton>
  );
};

export default MenuButton;
