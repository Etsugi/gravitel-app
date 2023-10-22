import { FC, ReactElement, useMemo, useState } from "react";
import { CircleDiagram, ICircleDiagramItem } from "shared/ui/CircleDiagram/CircleDiagram";
import { DashboardStatDiagramText } from "./DashboardStatDiagramText";
import "./style.css";

interface IProps {
  items: ICircleDiagramItem[];
  middleText?: string;
}

export const DashboardStatDiagram: FC<IProps> = ({ items, middleText }: IProps): ReactElement => {
  const [focusItem, setFocusItem] = useState<ICircleDiagramItem | null>(null);
  const [focusTotal, setFocusTotal] = useState<boolean>(false);

  const total = useMemo((): number => items.reduce((sum, current) => (sum += current.value), 0), [items]);

  const onFocusTotal = () => {
    setFocusTotal(true);
  };

  const onBlurTotal = () => {
    setFocusTotal(false);
  };

  const setFocusHandler = (item: ICircleDiagramItem) => {
    setFocusItem(item);
  };

  const setBlurHandler = () => {
    setFocusItem(null);
  };

  return (
    <div className="dashboard-stat-diagram">
      <CircleDiagram
        items={items}
        focusItem={focusItem}
        setFocus={setFocusHandler}
        setBlur={setBlurHandler}
        roundedCaps
        size="sm"
        trackWidth="sm"
        middleText={middleText}
        middleTextFontSize={20}
        className={focusTotal ? "dashboard-stat-diagram__circle_focus" : undefined}
      />

      <div className="dashboard-stat-diagram__text-block">
        <DashboardStatDiagramText key={"total"} item={{ value: total, label: "Всего" }} setFocus={onFocusTotal} setBlur={onBlurTotal} />

        {items.map((item) => (
          <DashboardStatDiagramText key={item.label} item={item} focusItem={focusItem} setFocus={setFocusHandler} setBlur={setBlurHandler} />
        ))}
      </div>
    </div>
  );
};
