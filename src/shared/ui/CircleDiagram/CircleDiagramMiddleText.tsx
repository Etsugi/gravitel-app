import { FC, ReactElement } from "react";
import { ICircleDiagram, ICircleDiagramItem } from "./CircleDiagram";

type TProps = Pick<ICircleDiagram, "middleText" | "middleTextFontSize" | "middleTextStyles">;
interface IProps extends TProps {
  currTotal: number;
  focusItem: ICircleDiagramItem | null;
}

export const CircleDiagramMiddleText: FC<IProps> = (props: IProps): ReactElement | null => {
  const { middleText, currTotal, focusItem, middleTextFontSize, middleTextStyles } = props;

  if (!middleText) return null;

  return (
    <text
      textAnchor="middle"
      dominantBaseline="middle"
      x="50%"
      y="50%"
      fontSize={middleTextFontSize}
      className="circle-diagram-middle-text"
      style={{ ...middleTextStyles }}
    >
      <tspan x="50%" dy="-8%">
        {middleText}
      </tspan>

      <tspan x="50%" dy="20%" fontSize={middleTextFontSize! * 2}>
        {focusItem ? focusItem.value : currTotal}
      </tspan>
    </text>
  );
};
