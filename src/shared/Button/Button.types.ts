import {ButtonHTMLAttributes} from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>  {
    theme?: "fill" | "transparent" | "secondary";
    tiny?: boolean;
}
