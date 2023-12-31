import React from "react";
import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #808080",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const FormModal = ({ open, onClose, formComponent }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{formComponent}</Box>
    </Modal>
  );
};

export default FormModal;
