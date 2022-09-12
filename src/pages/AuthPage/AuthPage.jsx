import React, { memo } from "react";
import { getStatus } from "store/app-data/app-data";
import { useAppSelector } from "../../hooks/index";
import { getIsOpenForm } from "store/app-process/app-process";
import { FormAuth } from "./LoginForm/FormAuth";
import { FormRegistration } from "./LoginForm/FormRegistration";
import { AuthModal } from "../../components/UI/Modal/AuthModal/AuthModal";

export const AuthPage = memo(() => {
  const status = useAppSelector(getStatus);
  const isOpenForm = useAppSelector(getIsOpenForm);

  return (
    <div className="container-xxl mt-20">
      {status && <AuthModal message={status} />}
      {!isOpenForm ? <FormAuth /> : <FormRegistration />}
    </div>
  );
});
