import { FC, ReactElement } from "react";
import { ICircleDiagramItem } from "shared/ui/CircleDiagram/CircleDiagram";

interface IProps {
  item: ICircleDiagramItem;
  focusItem?: ICircleDiagramItem | null;
  setFocus: (item: ICircleDiagramItem) => void;
  setBlur: () => void;
}

export const DashboardStatDiagramText: FC<IProps> = ({ item, focusItem, setFocus, setBlur }: IProps): ReactElement => {
  const isFocus: boolean = item === focusItem;

  const onFocusHandler = () => {
    setFocus(item);
  };

  return (
    <p
      className={`dashboard-stat-diagram__text ${isFocus ? "dashboard-stat-diagram__text_focus" : ""}`}
      onMouseOver={onFocusHandler}
      onMouseLeave={setBlur}
    >
      <span>{`${item.label}:`}</span>
      <span>{item.value}</span>
    </p>
  );
};
