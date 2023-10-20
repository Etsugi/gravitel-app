import { Properties as CSSProperties } from "csstype";
import { FC, ReactElement, useState } from "react";
import { CircleDiagramItem } from "shared/ui/CircleDiagram/CircleDiagramItem";
import { CircleDiagramMiddleText } from "shared/ui/CircleDiagram/CircleDiagramMiddleText";

const defaultColors = ["red", "blue", "green", "#3f37c9"];

export interface ICircleDiagramItem {
  value: number;
  label: string;
  color?: string;
  displayValue?: string;
}

export interface ICircleDiagram {
  items?: ICircleDiagramItem[];
  roundedCaps?: boolean;
  size?: "sm" | "md" | "lg" | number;
  trackWidth?: "sm" | "md" | "lg";
  trackColor?: string;
  middleText?: string;
  totalFontSize?: number;
  totalTextColor?: string;
  totalSx?: CSSProperties;
}

export const CircleDiagram: FC<ICircleDiagram> = (props: ICircleDiagram): ReactElement => {
  const {
    items = [],
    roundedCaps = true,
    size = "lg",
    trackWidth = "md",
    trackColor = "#141517",
    middleText = "",
    totalTextColor = "black",
    totalFontSize = 30,
    totalSx = {},
  } = props;

  const [focusItem, setFocusItem] = useState<ICircleDiagramItem | null>(null);

  const currTotal: number = items.reduce((sum, current) => (sum += current.value), 0);
  let currPercentTotal: number = 0;

  /**
   * box size of chart
   */
  let sz: string = "";
  let tw: number = 0;
  let vb: string = "";

  switch (size) {
    case "sm":
      sz = "216";
      break;
    case "md":
      sz = "316";
      break;
    case "lg":
      sz = "400";
      break;
    default:
      sz = `${size}`;
  }

  switch (trackWidth) {
    case "sm":
      tw = 3;
      vb = "0 0 36 36";
      break;
    case "md":
      tw = 5;
      vb = "0 0 38 38";
      break;
    case "lg":
      tw = 7;
      vb = "0 0 40 40";
      break;
    default:
      tw = 0;
  }

  return (
    <svg width={sz} height={sz}>
      <svg viewBox={vb}>
        <circle
          cx="50%"
          cy="50%"
          r="15.91549430918954"
          fill="none"
          stroke={trackColor}
          strokeWidth={tw}
          strokeLinecap="round"
          strokeDasharray="100 0"
          strokeDashoffset="25"
        />

        {items.map((item: ICircleDiagramItem, index) => {
          const offSet = index ? -currPercentTotal : 0;
          const itemProportion = item.value / (currTotal / 100);
          currPercentTotal += itemProportion;

          return (
            <CircleDiagramItem
              key={index}
              item={item}
              focusItem={focusItem}
              displayValue={item.displayValue || `${item.value}% ${item.label}`}
              color={item?.color || defaultColors[index % defaultColors.length]}
              trackWidth={tw}
              roundedCaps={roundedCaps}
              offSet={offSet}
              itemProportion={itemProportion}
              setFocus={() => setFocusItem(item)}
              setBlur={() => setFocusItem(null)}
            />
          );
        })}
      </svg>

      <CircleDiagramMiddleText
        middleText={middleText}
        currTotal={currTotal}
        focusItem={focusItem}
        totalFontSize={totalFontSize}
        totalTextColor={totalTextColor}
        totalSx={totalSx}
      />
    </svg>
  );
};
