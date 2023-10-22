import { DashboardStatDiagram, useDashboardStatStore } from "entities/DashboardStat";
import { FC, ReactElement, memo, useEffect } from "react";
import "./style.css";

export const DashboardPage: FC = memo((): ReactElement => {
  const { getData, getScenariosDiagramItems, getListsDiagramItems, getDialogsDiagramItems } = useDashboardStatStore();

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="dashboard-page">
      <DashboardStatDiagram items={getScenariosDiagramItems()} middleText="Сценарии" />
      <DashboardStatDiagram items={getListsDiagramItems()} middleText="Списки" />
      <DashboardStatDiagram items={getDialogsDiagramItems()} middleText="Диалоги" />
    </div>
  );
});
