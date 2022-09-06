import { useDispatch } from "react-redux";
import { registrationAction } from "../store/api-actions";

export const useRegistration = () => {
  const dispatch = useDispatch();

  const handleSubmitRegistration = (data) => {
    const registrationData = {
      username: data.username,
      password: data.password,
    };
    dispatch(registrationAction(registrationData));
  };

  return {
    handleSubmitRegistration,
  };
};
