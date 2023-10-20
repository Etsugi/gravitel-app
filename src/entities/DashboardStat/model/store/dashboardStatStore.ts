import { apolloClient } from "shared/api/apollo";
import { IDashboardStatStore, TDashboardStatQueries } from "../types/dashboardStat";
import { create } from "zustand";
import { GET_DASHBOARD_STAT } from "entities/DashboardStat/model/queries/dashboardStatQueries";

export const dashboardStatStore = create<IDashboardStatStore>((set) => ({
  isLoading: false,

  scenarios: [],
  lists: [],
  dialogs: [],

  getData: async () => {
    set({ isLoading: true });

    try {
      const { data } = await apolloClient.query<TDashboardStatQueries>({
        query: GET_DASHBOARD_STAT,
      });

      console.log(data);
    } catch (error: unknown) {
      console.error(error);
    }

    set({ isLoading: false });
  },
}));
