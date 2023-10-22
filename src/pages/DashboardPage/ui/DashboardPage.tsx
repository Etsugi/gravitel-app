import { IDashboardStatScenario, DashboardStatDiagram } from "entities/DashboardStat";
import { FC, ReactElement, memo, useMemo } from "react";
import { ICircleDiagramItem } from "shared/ui/CircleDiagram/CircleDiagram";

export const DashboardPage: FC = memo((): ReactElement => {
  const scenario: IDashboardStatScenario = { active: 13, inactive: 4, completed: 7 };
  const { active, inactive, completed } = scenario;

  const items = useMemo((): ICircleDiagramItem[] => {
    return [
      { value: active, label: "Активных", color: "#fccf82" },
      { value: inactive, label: "Неактивных", color: "#f9a752" },
      { value: completed, label: "Завершённых", color: "#f2f0f5" },
    ];
  }, [active, inactive, completed]);

  return (
    <div>
      <DashboardStatDiagram items={items} middleText="Сценарии" />
    </div>
  );
});
