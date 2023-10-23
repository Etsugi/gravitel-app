import { Properties as CSSProperties } from "csstype";
import { FC, ReactElement, useEffect, useState } from "react";
import { CircleDiagramItem } from "./CircleDiagramItem";
import { CircleDiagramMiddleText } from "./CircleDiagramMiddleText";
import "./style.css";

const defaultColors = ["red", "blue", "green", "yellow"];

const sizePreset = {
  sm: 216,
  md: 316,
  lg: 400,
} as const;

const strokeWidthPreset = {
  sm: 5,
  md: 15,
  lg: 45,
} as const;

const offsetRatio = {
  top: 0.25,
  right: 0,
  left: 0.5,
  bottom: -0.25,
} as const;

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
  strokeWidth?: "sm" | "md" | "lg" | number;
  startPoint?: "top" | "right" | "bottom" | "left";
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
    strokeWidth: strokeWidthProps = "md",
    startPoint = "left",
    middleText = "",
    middleTextFontSize = 30,
    middleTextStyles = {},
    className = "",
  } = props;

  const [focusItem, setFocusItem] = useState<ICircleDiagramItem | null>(null);

  const currTotal: number = items.reduce((sum, current) => (sum += current.value), 0);

  const size: number = typeof sizeProps === "string" ? sizePreset[sizeProps] : sizeProps;
  const strokeWidth: number = typeof strokeWidthProps === "string" ? strokeWidthPreset[strokeWidthProps] : strokeWidthProps;
  const radius: number = (size - strokeWidth) / 2;
  const circumferenceLength: number = 2 * Math.PI * radius;

  let offset: number = circumferenceLength * offsetRatio[startPoint];
  let prevCircle: number = 0;

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
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={`circle-diagram ${className}`}>
      {items.map((item: ICircleDiagramItem, index) => {
        const circleProportion = Number((item.value / (currTotal / 100)).toFixed(3));
        const circleWidth: number = (circumferenceLength * circleProportion) / 100;

        if (index > 0) {
          offset = prevCircle;
        }

        prevCircle = offset - circleWidth;

        return (
          <CircleDiagramItem
            key={item.label}
            item={item}
            focusItem={focusItem}
            color={item?.color || defaultColors[index % defaultColors.length]}
            roundedCaps={roundedCaps}
            strokeWidth={strokeWidth}
            radius={radius}
            offSet={offset}
            circleWidth={circleWidth}
            circumferenceLength={circumferenceLength}
            setFocus={setFocusHandler}
            setBlur={setBlurHandler}
          />
        );
      })}

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
