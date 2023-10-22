import { ICircleDiagramItem } from "shared/ui/CircleDiagram/CircleDiagram";
import { IDashboardStatStatistic } from "../types/dashboardStat";

export const transformToDiagramItem = (statistic: IDashboardStatStatistic | null): ICircleDiagramItem[] => {
  if (!statistic) return [];

  const { active, inactive, completed } = statistic;

  return [
    { value: active, label: "Активных", color: "#fccf82" },
    { value: inactive, label: "Неактивных", color: "#f9a752" },
    { value: completed, label: "Завершённых", color: "#f2f0f5" },
  ];
};
