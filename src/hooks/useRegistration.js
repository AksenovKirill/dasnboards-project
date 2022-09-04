import { useDispatch } from "react-redux";
import { registrationAction } from "../store/api-actions";

export const useRegistration = () => {
  const dispatch = useDispatch();

  const handleSubmitRegistration = (data) => {
    dispatch(registrationAction(data));
  };

  return {
    handleSubmitRegistration,
  };
};
