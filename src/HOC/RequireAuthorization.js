import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthorizationStatus } from "assets/const";

export const RequireAuthorization = ({ children }) => {
  const location = useLocation();
  const data = useSelector((state) => state.user.data);
  const authStatus = useSelector((state) => state.user.authorizationStatus);
  const { NoAuth, Unknown } = AuthorizationStatus;

  if (authStatus === NoAuth || !data) {
    return <Navigate to="/auth" state={{ from: location }} />;
  }

  return children;
};
