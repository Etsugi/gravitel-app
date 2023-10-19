import RequireAuth from "app/providers/router/ui/RequireAuth";
import { FC, ReactElement, memo, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { TAppRouteProps, routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter: FC = (): ReactElement => {
  const renderWithWrapper = useCallback((route: TAppRouteProps): ReactElement => {
    const element = <div className="page-wrapper">{route.element}</div>;

    return <Route key={route.path} path={route.path} element={route.isPrivate ? <RequireAuth>{element}</RequireAuth> : element} />;
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
