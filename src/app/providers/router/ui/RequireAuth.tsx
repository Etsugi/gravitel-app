import { useUserStore } from "entities/User/model/store/userStore";
import { FC, ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface IProps {
  children: ReactElement;
}

const RequireAuth: FC<IProps> = ({ children }: IProps): ReactElement => {
  const auth = useUserStore((state) => state.isAuth);
  const location = useLocation();
  const isLoginPage = location.pathname === RoutePath.login;

  if (!auth && !isLoginPage) {
    return <Navigate to={RoutePath.login} state={{ from: location }} replace />;
  }

  if (auth && isLoginPage) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
