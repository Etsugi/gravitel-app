import { FC, ReactElement } from "react";
import { CircleDiagram, ICircleDiagramItem } from "shared/ui/CircleDiagram/CircleDiagram";
import "./style.css";

export const DashboardStatDiagram: FC = (): ReactElement => {
  const items: ICircleDiagramItem[] = [
    { value: 13, label: "Активных", color: "#fccf82" },
    { value: 4, label: "Неактивных", color: "#f9a752" },
    { value: 7, label: "Завершённых", color: "#f2f0f5" },
  ];

  return (
    <div>
      <CircleDiagram items={items} size="md" trackWidth="sm" middleText="Сценарии" />
    </div>
  );
};
