import { IButton } from './Button.types';
import c from "./style.module.css";
import classnames from "@utils/classnames.ts";

export function Button(props: IButton) {
  const { children, className, theme = "fill", tiny = false } = props;
  return <button {...props} className={classnames(c.button, c["button--" + theme], (tiny ? c["button--thin"] : ""), className as string)}>{children}</button>;
}
