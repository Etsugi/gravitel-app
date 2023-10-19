import { FC, ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface IProps {
  children: ReactElement;
}

const RequireAuth: FC<IProps> = ({ children }: IProps): ReactElement => {
  const auth = false; // for future;
  const location = useLocation();

  if (!auth) {
    return <Navigate to={RoutePath.login} state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
