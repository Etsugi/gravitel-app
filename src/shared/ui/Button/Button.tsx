import { FC, ReactElement, ButtonHTMLAttributes, memo } from "react";
import "./style.css";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
}

export const Button: FC<IButton> = memo((props: IButton): ReactElement => {
  const { title } = props;

  return (
    <button {...props} className="button">
      {title}
    </button>
  );
});