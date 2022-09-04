import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../store/api-actions";
import { requireAuthorization } from "../store/user-process/user-process";
import { clearErrorAction, clearSuccessAction } from "../store/api-actions";
import { switchForm } from "../store/app-process/app-process";
import { dropToken } from "../api/token";
import { AuthorizationStatus } from "../assets/const";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitLogin = (data) => {
    dispatch(loginAction(data));
    dispatch(
      requireAuthorization({
        data: data,
        authorizationStatus: AuthorizationStatus.Auth,
      })
    );
  };

  const handleSubmitLogOut = (event) => {
    event.preventDefault();
    dropToken();
    dispatch(
      requireAuthorization({ authorizationStatus: AuthorizationStatus.NoAuth })
    );
    navigate("/auth");
  };

  const handleCloseModal = (status) => {
    dispatch(clearErrorAction());
    if (status) {
      dispatch(switchForm(false));
      dispatch(clearSuccessAction());
      navigate("/storages");
    }
  };

  return {
    handleSubmitLogin,
    handleSubmitLogOut,
    handleCloseModal,
  };
};
