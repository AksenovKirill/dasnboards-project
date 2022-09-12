import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Modal } from "../ReUsable/Modal";
import { ModalErrorIcon } from "../ReUsable/ModalErrorIcon";
import { ModalSuccessIcon } from "../ReUsable/ModalSuccessIcon";
import { ModalMessage } from "../ReUsable/ModalMessage";
import { switchForm } from "store/app-process/app-process";
import { clearStatusAction } from "store/api-actions";
import { ButtonLoginForm } from "../../Buttons/ButtonLoginForm/ButtonLoginForm";
import { ModalActions } from "../ReUsable/ModalActions";

export const AuthModal = memo(({ message }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseModal = () => {
    if (message?.status && message?.isLogin) {
      dispatch(switchForm(false));
      dispatch(clearStatusAction());
      navigate("/warehouses");
    }
    if (message?.status) {
      dispatch(switchForm(false));
      dispatch(clearStatusAction());
    } else {
      dispatch(clearStatusAction());
    }
  };

  return (
    <Modal>
      {message?.status ? <ModalSuccessIcon /> : <ModalErrorIcon />}
      <ModalMessage message={message} />
      <ModalActions>
        <ButtonLoginForm onClick={handleCloseModal}>Ok, got it!</ButtonLoginForm>
      </ModalActions>
    </Modal>
  );
});
