import { apolloClient } from "shared/api/apollo";
import { create } from "zustand";
import { transformToDiagramItem } from "../helpers/transformToDiagramItem";
import { GET_DASHBOARD_STAT } from "../queries/dashboardStatQueries";
import { IDashboardStatStore, TDashboardStatQueries } from "../types/dashboardStat";

export const useDashboardStatStore = create<IDashboardStatStore>((set, get) => ({
  isLoading: false,

  scenarios: null,
  lists: null,
  dialogs: null,

  getData: async () => {
    set({ isLoading: true });

    try {
      const { data } = await apolloClient.query<TDashboardStatQueries>({
        query: GET_DASHBOARD_STAT,
      });

      const { scenarios, lists, dialogs } = data.dashboard;
      set({ scenarios, lists, dialogs });
    } catch (error: unknown) {
      console.error(error);
    }

    set({ isLoading: false });
  },

  getScenariosDiagramItems: () => transformToDiagramItem(get().scenarios),
  getListsDiagramItems: () => transformToDiagramItem(get().scenarios),
  getDialogsDiagramItems: () => transformToDiagramItem(get().scenarios),
}));
