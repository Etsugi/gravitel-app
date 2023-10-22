import { FC, ReactElement } from "react";
import { ICircleDiagramItem } from "./CircleDiagram";

interface IProps {
  item: ICircleDiagramItem;
  focusItem: ICircleDiagramItem | null;
  roundedCaps: boolean;
  color: string;
  trackWidth: number;
  offSet: number;
  itemProportion: number;
  setFocus: (item: ICircleDiagramItem) => void;
  setBlur: (item: null) => void;
}

export const CircleDiagramItem: FC<IProps> = (props: IProps): ReactElement => {
  const { item, focusItem, roundedCaps, color, trackWidth, offSet, itemProportion, setFocus, setBlur } = props;

  const isFocusItem = item === focusItem;

  const setFocusHandler = () => {
    setFocus(item);
  };

  const setBlurHandler = () => {
    setBlur(null);
  };

  const dashArr = (value: number): string => {
    let adjustPercent = value;

    if (roundedCaps) {
      adjustPercent = value === 100 ? value : value >= 2 ? value - 1 : 0;
    }

    return `${itemProportion} ${100 - adjustPercent}`;
  };

  return (
    <circle
      cx="50%"
      cy="50%"
      r="15.9"
      strokeLinecap={roundedCaps ? "round" : "inherit"}
      stroke={color}
      strokeWidth={isFocusItem ? trackWidth * 1.35 : trackWidth}
      strokeDasharray={dashArr(item.value)}
      strokeDashoffset={offSet}
      onMouseOver={setFocusHandler}
      onMouseLeave={setBlurHandler}
      className="circle-diagram-item-circle"
    />
  );
};
