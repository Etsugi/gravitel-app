import { FC, ReactElement } from "react";
import { ICircleDiagram, ICircleDiagramItem } from "./CircleDiagram";

type TProps = Pick<ICircleDiagram, "middleText" | "totalFontSize" | "totalTextColor" | "totalSx">;
interface IProps extends TProps {
  currTotal: number;
  focusItem: ICircleDiagramItem | null;
}

export const CircleDiagramMiddleText: FC<IProps> = (props: IProps): ReactElement | null => {
  const { middleText, currTotal, focusItem, totalFontSize, totalTextColor, totalSx } = props;

  if (!middleText) return null;

  return (
    <text textAnchor="middle" dominantBaseline="middle" x="50%" y="50%" fill={totalTextColor} fontSize={totalFontSize} style={{ ...totalSx }}>
      <tspan x="50%" dy="-5%">
        {middleText}
      </tspan>

      <tspan x="50%" dy="15%" fontSize={totalFontSize! * 1.3} fill="#f48945">
        {focusItem ? focusItem.value : currTotal}
      </tspan>
    </text>
  );
};
