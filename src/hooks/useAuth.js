import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../store/api-actions";
import { requireAuthorization } from "../store/user-process/user-process";
import { dropToken } from "../api/token";
import { AuthorizationStatus } from "../assets/const";
import classes from "../pages/AuthPage/AuthPage.module.css";

export const useAuth = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitLogin = (event, name, password) => {
    event.preventDefault();
    const userData = { username: name, password: password };
    dispatch(loginAction(userData));
    dispatch(
      requireAuthorization({
        data: userData,
        authorizationStatus: AuthorizationStatus.Auth,
      })
    );
    setErrorMessages("");
  };

  const handleSubmitLogOut = (event) => {
    event.preventDefault();
    dropToken();
    dispatch(
      requireAuthorization({ authorizationStatus: AuthorizationStatus.NoAuth })
    );
    navigate("/auth");
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className={classes.error}>{errorMessages.message}</div>
    );

  return {
    errorMessages,
    handleSubmitLogin,
    handleSubmitLogOut,
    renderErrorMessage,
  };
};
