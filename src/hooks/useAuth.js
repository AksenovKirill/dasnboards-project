import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../store/api-actions";
import { requireAuthorization } from "../store/user-process/user-process";
import { dropToken } from "../api/token";
import {
  AuthorizationStatus,
  AUTH_TOKEN_KEY_NAME,
  HTTP_CODES,
} from "../assets/const";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitLogin = (res) => {
    dispatch(loginAction(res));
  };

  const handleSubmitLogOut = (event) => {
    event.preventDefault();
    dropToken();
    dispatch(
      requireAuthorization({ authorizationStatus: AuthorizationStatus.NoAuth })
    );
    navigate("/auth");
  };

  return {
    handleSubmitLogin,
    handleSubmitLogOut,
  };
};
