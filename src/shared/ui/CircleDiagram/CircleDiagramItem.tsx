import { FC, ReactElement } from "react";
import { ICircleDiagramItem } from "./CircleDiagram";

interface IProps {
  item: ICircleDiagramItem;
  focusItem: ICircleDiagramItem | null;
  color: string;
  roundedCaps: boolean;
  strokeWidth: number;
  radius: number;
  offSet: number;
  circleWidth: number;
  circumferenceLength: number;
  setFocus: (item: ICircleDiagramItem) => void;
  setBlur: (item: null) => void;
}

export const CircleDiagramItem: FC<IProps> = (props: IProps): ReactElement => {
  const { item, focusItem, color, roundedCaps, strokeWidth, radius, offSet, circleWidth, circumferenceLength, setFocus, setBlur } = props;

  const isFocusItem = item === focusItem;

  const setFocusHandler = () => {
    setFocus(item);
  };

  const setBlurHandler = () => {
    setBlur(null);
  };

  return (
    <circle
      cx="50%"
      cy="50%"
      r={radius}
      strokeLinecap={roundedCaps ? "round" : "inherit"}
      stroke={color}
      strokeWidth={isFocusItem ? strokeWidth * 1.35 : strokeWidth}
      strokeDasharray={`${circleWidth} ${circumferenceLength - circleWidth}`}
      strokeDashoffset={offSet}
      onMouseOver={setFocusHandler}
      onMouseLeave={setBlurHandler}
      className="circle-diagram-item-circle"
    />
  );
};
