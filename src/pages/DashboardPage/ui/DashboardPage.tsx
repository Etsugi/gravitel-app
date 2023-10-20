import { DashboardStatDiagram } from "entities/DashboardStat/ui/DashboardStatDiagram/DashboardStatDiagram";
import { FC, ReactElement, memo } from "react";

export const DashboardPage: FC = memo((): ReactElement => {
  return (
    <div>
      <DashboardStatDiagram />
    </div>
  );
});
