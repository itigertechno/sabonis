import {IFormInput} from './FormInput.types';
import classnames from "@utils/classnames.ts";

export function FormInput(props: IFormInput) {
    const {label, className = ""} = props;

    return (
        <label className={classnames("w-[100%]", className)}>
            <span className="fs-16 fw-500 text-neutral-900 mb-[5px] block">{label}</span>
            <input {...props} className="w-[100%] border-[1px] border-[var(--color-neutral-900)] rounded-[5px] leading-[50px] px-[20px]" />
        </label>
    );
}
