import React, { memo } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { FormAuth } from "./LoginForm/FormAuth";
import { FormRegistration } from "./LoginForm/FormRegistration";
import { AuthModal } from "../../components/UI/Modal/AuthModal";

export const AuthPage = memo(() => {
  const isOpenForm = useSelector((state) => state.app?.openForm);
  const error = useSelector((state) => state.data?.error);
  const success = useSelector((state) => state.data?.success);

  return (
    <div className="container-xxl mt-20">
      {(error || success) &&
        ReactDOM.createPortal(
          <AuthModal error={error} success={success} />,
          document.getElementById("modal-root")
        )}
      {!isOpenForm ? <FormAuth /> : <FormRegistration />}
    </div>
  );
});
