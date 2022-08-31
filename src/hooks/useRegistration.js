import { useDispatch } from "react-redux";
import { registrationAction } from "../store/api-actions";

export const useRegistration = () => {
  const dispatch = useDispatch();

  const handleSubmitRegistration = (event, userName, password) => {
    event.preventDefault();
    if (userName && password) {
      const userData = { username: userName, password: password };
      dispatch(registrationAction(userData));
    }
  };

  return {
    handleSubmitRegistration,
  };
};
