import { FC, ReactElement, InputHTMLAttributes } from "react";
import "./style.css";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<IInput> = (props: IInput): ReactElement => {
  const { value = "" } = props;

  return <input {...props} value={value} className="input" />;
};
