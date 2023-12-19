import { IButton } from './Button.types';
import c from "./style.module.css";
import classnames from "@utils/classnames.ts";

export function Button(props: IButton) {
  const { children, className, theme = "fill" } = props;
  return <button {...props} className={classnames(c.button, c["button--" + theme], className as string)}>{children}</button>;
}
