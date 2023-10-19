import { RouteProps } from "react-router-dom";
import { LoginPage } from "pages/LoginPage";
import { DashboardPage } from "pages/DashboardPage";

export type TAppRouteProps = RouteProps & {
  isPrivate?: boolean;
};

export enum AppRoutes {
  MAIN = "main",
  LOGIN = "login",
  DASHBOARD = "dashboard",
  // last
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.DASHBOARD]: "/dashboard",
   // last
   [AppRoutes.NOT_FOUND]: "*",
} as const;

export const routeConfig: Record<AppRoutes, TAppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <DashboardPage />,
    isPrivate: true,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage />,
  },
  [AppRoutes.DASHBOARD]: {
    path: RoutePath.dashboard,
    element: <DashboardPage />,
    isPrivate: true,
  },
   // last
   [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <DashboardPage />,
    isPrivate: true,
  },
} as const;
