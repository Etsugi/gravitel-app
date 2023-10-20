interface IDashboardStatStatistic {
  active: number;
  inactive: number;
  completed: number;
}

export interface IDashboardStatScenario extends IDashboardStatStatistic {}
export interface IDashboardStatList extends IDashboardStatStatistic {}
export interface IDashboardStatDialog extends IDashboardStatStatistic {}

export interface IDashboardStat {
  scenarios: IDashboardStatScenario[];
  lists: IDashboardStatList[];
  dialogs: IDashboardStatDialog[];
}

export interface IDashboardStatStore {
  isLoading: boolean;

  scenarios: IDashboardStatScenario[];
  lists: IDashboardStatList[];
  dialogs: IDashboardStatDialog[];

  getData: () => void;
}

export type TDashboardStatQueries = {
  dashboard: IDashboardStat;
};
