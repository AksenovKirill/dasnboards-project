import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../UI/Modal/Modal";
import { AuthModalErrorIcon } from "./AuthModalErrorIcon";
import { AuthModalSuccessIcon } from "./AuthModalSuccessIcon";
import { AuthModalMessage } from "./AuthModalMessage";
import { switchForm } from "store/app-process/app-process";
import { clearErrorAction, clearSuccessAction } from "store/api-actions";
import { ButtonLoginForm } from "../Buttons/ButtonLoginForm/ButtonLoginForm";
import { ModalActions } from "./ModalActions";

export const AuthModal = memo(({ message }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseModal = () => {
    if (message?.status && message?.isLogin) {
      dispatch(switchForm(false));
      dispatch(clearSuccessAction());
      navigate("/warehouses");
    }
    if (message?.status) {
      dispatch(switchForm(false));
      dispatch(clearSuccessAction());
    } else {
      dispatch(clearErrorAction());
    }
  };

  return (
    <Modal>
      {message?.status ? <AuthModalSuccessIcon /> : <AuthModalErrorIcon />}
      <AuthModalMessage message={message} />
      <ModalActions>
        <ButtonLoginForm onClick={handleCloseModal}>Ok, got it!</ButtonLoginForm>
      </ModalActions>
    </Modal>
  );
});
