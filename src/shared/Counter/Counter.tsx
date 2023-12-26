import { ICounter } from './Counter.types';
import {useState} from "react";

export function Counter({startValue = 1, onChange = () => null}: ICounter) {
  const [value, setValue] = useState<number>(startValue)
  const increment = () => {
    setValue(value + 1);
    onChange(value + 1);
  }

  const decrement = () => {
    if (value <= 1) {
      setValue(1)
      return;
    }
    setValue(value - 1)
    onChange(value - 1)
  }

  return (
      <div className="flex items-center justify-center gap-5">
        <button onClick={() => decrement()}>
          <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="16" y="0.289062" width="1.61905" height="16" transform="rotate(90 16 0.289062)"
                  fill="var(--color-neutral-900"/>
          </svg>
        </button>
        <span className="fs-24 fw-400 text-neutral-900 whitespace-nowrap">{ value } шт.</span>
        <button onClick={() => increment()}>
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="7" y="0.619141" width="2" height="12.9524" fill="#B4B4B4"/>
            <rect x="16" y="6.2832" width="1.61905" height="16" transform="rotate(90 16 6.2832)"
                  fill="var(--color-neutral-900"/>
          </svg>
        </button>
      </div>
  );
}
