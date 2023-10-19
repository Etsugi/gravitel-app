import { RouteProps } from "react-router-dom";

export type TAppRouteProps = RouteProps & {
  isPrivate?: boolean;
};

export enum AppRoutes {
  MAIN = "main",
  LOGIN = "login",
  DASHBOARD = "dashboard",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.DASHBOARD]: "/dashboard",
} as const;

export const routeConfig: Record<AppRoutes, TAppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: "mainPage",
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: "loginPage",
  },
  [AppRoutes.DASHBOARD]: {
    path: RoutePath.dashboard,
    element: "dashboardPage",
    isPrivate: true,
  },
} as const;
