import {InputHTMLAttributes} from "react";

export interface IFormInput extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
