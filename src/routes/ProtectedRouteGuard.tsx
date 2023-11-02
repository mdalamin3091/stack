import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/app/hooks";
import { selectToken } from "../redux/features/auth/authSlice";

interface Props {
  children: ReactNode;
}

const ProtectedRouteGuard: FC<Props> = ({ children }) => {
  const token = useAppSelector(selectToken);
  if (token) {
    return children;
  } else {
    // Redirect to the login page or any other appropriate page for unauthenticated users
    return <Navigate to="/signin" />;
  }
};

export default ProtectedRouteGuard;
