import { FC, ReactElement } from "react";
import { ICircleDiagramItem } from "./CircleDiagram";

interface IProps {
  item: ICircleDiagramItem;
  focusItem: ICircleDiagramItem | null;
  displayValue: string;
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

  const onFocus = () => {
    setFocus(item);
  };

  const onBlur = () => {
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
      style={{ transition: "stroke 1s ease-in-out", transitionDuration: "150" }}
      cx="50%"
      cy="50%"
      r="15.91549430918954"
      strokeLinecap={roundedCaps ? "round" : "inherit"}
      fill="none"
      stroke={color}
      strokeWidth={isFocusItem ? trackWidth * 1.2 : trackWidth}
      strokeDasharray={dashArr(item.value)}
      strokeDashoffset={offSet}
      onMouseOver={onFocus}
      onMouseLeave={onBlur}
      cursor="pointer"
    />
  );
};
