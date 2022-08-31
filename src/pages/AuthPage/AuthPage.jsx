import React, { memo } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormAuth } from "./LoginForm/FormAuth";
import { FormRegistration } from "./LoginForm/FormRegistration";
import { AuthModal } from "../../components/UI/Modal/AuthModal";
import { clearErrorAction, clearSuccessAction } from "../../store/api-actions";
import { switchForm } from "../../store/app-process/app-process";

export const AuthPage = memo(() => {
  const dispatch = useDispatch();
  const isOpenForm = useSelector((state) => state.app?.openForm);
  const error = useSelector((state) => state.data?.error);
  const success = useSelector((state) => state.data?.success);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    dispatch(clearErrorAction());
    if (success?.status) {
      dispatch(switchForm(false));
      dispatch(clearSuccessAction());
      navigate("/storages");
    }
  };

  return (
    <div className="container-xxl mt-20">
      {(error || success) &&
        ReactDOM.createPortal(
          <AuthModal
            error={error}
            success={success}
            handleClose={handleCloseModal}
          />,
          document.getElementById("modal-root")
        )}
      {!isOpenForm ? <FormAuth /> : <FormRegistration />}
    </div>
  );
});
