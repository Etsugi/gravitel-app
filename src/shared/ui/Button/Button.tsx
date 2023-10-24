import { FC, ReactElement, ButtonHTMLAttributes, ReactNode } from "react";
import "./style.css";

const ButtonTheme = {
  DEFAULT: "default",
  CLEAR: "clear",
} as const;
type TButtonTheme = TValueOf<typeof ButtonTheme>;

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: TButtonTheme;
  className?: string;
  children?: ReactNode;
}

export const Button: FC<IButton> = (props: IButton): ReactElement => {
  const { theme = ButtonTheme.DEFAULT, className, children } = props;

  return (
    <button {...props} className={`button button-${theme} ${className || ""}`}>
      {children}
    </button>
  );
};
