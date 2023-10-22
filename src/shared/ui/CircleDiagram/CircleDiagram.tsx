import { Properties as CSSProperties } from "csstype";
import { FC, ReactElement, useEffect, useState } from "react";
import { CircleDiagramItem } from "./CircleDiagramItem";
import { CircleDiagramMiddleText } from "./CircleDiagramMiddleText";
import "./style.css";

const defaultColors = ["red", "blue", "green", "yellow"];

export interface ICircleDiagramItem {
  value: number;
  label: string;
  color?: string;
  displayValue?: string;
}

export interface ICircleDiagram {
  items?: ICircleDiagramItem[];
  focusItem?: ICircleDiagramItem | null;
  setFocus?: (item: ICircleDiagramItem) => void;
  setBlur?: () => void;
  roundedCaps?: boolean;
  size?: "sm" | "md" | "lg" | number;
  trackWidth?: "sm" | "md" | "lg" | number;
  middleText?: string;
  middleTextFontSize?: number;
  middleTextStyles?: CSSProperties;
  className?: string;
}

export const CircleDiagram: FC<ICircleDiagram> = (props: ICircleDiagram): ReactElement => {
  const {
    items = [],
    focusItem: focusItemProps = null,
    setFocus,
    setBlur,
    roundedCaps = false,
    size: sizeProps = "lg",
    trackWidth: trackWidthProps = "md",
    middleText = "",
    middleTextFontSize = 30,
    middleTextStyles = {},
    className = "",
  } = props;

  const [focusItem, setFocusItem] = useState<ICircleDiagramItem | null>(null);

  const currTotal: number = items.reduce((sum, current) => (sum += current.value), 0);
  let currPercentTotal: number = 0;

  let size: number = 0;
  let trackWidth: number = 0;

  switch (sizeProps) {
    case "sm":
      size = 216;
      break;
    case "md":
      size = 316;
      break;
    case "lg":
      size = 400;
      break;
    default:
      size = sizeProps;
  }

  switch (trackWidthProps) {
    case "sm":
      trackWidth = 3;
      break;
    case "md":
      trackWidth = 5;
      break;
    case "lg":
      trackWidth = 7;
      break;
    default:
      trackWidth = trackWidthProps;
  }

  const viewBoxSize: number = 31.5 + trackWidth;
  const viewBox: string = `0 0 ${viewBoxSize} ${viewBoxSize}`;

  useEffect(() => {
    setFocusItem(focusItemProps);
  }, [focusItemProps]);

  const setFocusHandler = (item: ICircleDiagramItem) => {
    setFocusItem(item);
    if (typeof setFocus === "function") setFocus(item);
  };

  const setBlurHandler = () => {
    setFocusItem(null);
    if (typeof setBlur === "function") setBlur();
  };

  return (
    <svg width={size} height={size} className={`circle-diagram ${className}`}>
      <svg viewBox={viewBox}>
        <circle cx="50%" cy="50%" r="15.9" strokeWidth={trackWidth} className="circle-diagram-track" />

        {items.map((item: ICircleDiagramItem, index) => {
          const offSet = index ? -currPercentTotal : 0;
          const itemProportion = item.value / (currTotal / 100);
          currPercentTotal += itemProportion;

          return (
            <CircleDiagramItem
              key={item.label}
              item={item}
              focusItem={focusItem}
              color={item?.color || defaultColors[index % defaultColors.length]}
              trackWidth={trackWidth}
              roundedCaps={roundedCaps}
              offSet={offSet}
              itemProportion={itemProportion}
              setFocus={setFocusHandler}
              setBlur={setBlurHandler}
            />
          );
        })}
      </svg>

      <CircleDiagramMiddleText
        middleText={middleText}
        currTotal={currTotal}
        focusItem={focusItem}
        middleTextFontSize={middleTextFontSize}
        middleTextStyles={middleTextStyles}
      />
    </svg>
  );
};
