import {ICatalogCheckboxLabel, ICatalogFilter, ICatalogRangeSlider} from './CatalogFilter.types';
import c from "./style.module.css";
import {
    FC,
    FormEvent, Fragment,
    InputHTMLAttributes,
    PropsWithChildren,
    useEffect,
    useRef,
    useState
} from "react";
// import {Button} from "@shared/Button";
import classnames from "@utils/classnames.ts";
import uuid from "react-uuid";
import {Button} from "@shared/Button";
import DropList from "@shared/DropList/DropList.tsx";

export function CatalogFilter({}: ICatalogFilter) {
    return (
        <>
            <div className={classnames("w1024:hidden", c.wrapper)}>
                <div className="p-[18px] w-[100%] flex items-center justify-around rounded-[5px_5px_0_0] bg-[#F4F4F4]">
                    <CheckBoxLabel>В наличии</CheckBoxLabel>
                    <CheckBoxLabel>Со скидкой</CheckBoxLabel>
                </div>
                <DropList title="Цена">
                    <RangeSlider
                        step={1}
                        min={0}
                        max={1000000}
                        initialMax="300000"
                        initialMin="100000"
                        priceCap={32}
                    ></RangeSlider>
                </DropList>
                <DropList title="Цвет">
                    <CheckBoxList items={[
                        "Белое", "Красное", "Розовое", "Оранжевое",
                        "Белое", "Красное", "Розовое", "Оранжевое",
                        "Белое", "Красное", "Розовое", "Оранжевое"
                    ]}></CheckBoxList>
                </DropList>
                <DropList title="Цена">
                    <RangeSlider
                        step={1}
                        min={0}
                        max={1000000}
                        initialMax="300000"
                        initialMin="100000"
                        priceCap={32}
                    ></RangeSlider>
                </DropList>
                <DropList title="Сахар">
                    <CheckBoxList items={[
                        "Россия", "Италия", "Франция", "Испания",
                        "Англия", "Чехия", "Австрия", "Португалия",
                        "Щвейцария", "Нидерланды", "Люксембург", "Польша"
                    ]}></CheckBoxList>
                </DropList>
                <DropList title="Страна">
                    <CheckBoxList items={[
                        "Россия", "Италия", "Франция", "Испания",
                        "Англия", "Чехия", "Австрия", "Португалия",
                        "Щвейцария", "Нидерланды", "Люксембург", "Польша"
                    ]}></CheckBoxList>
                </DropList>
                <DropList title="Регион">
                    <CheckBoxList items={[
                        "Россия", "Италия", "Франция", "Испания",
                        "Англия", "Чехия", "Австрия", "Португалия",
                        "Щвейцария", "Нидерланды", "Люксембург", "Польша"
                    ]}></CheckBoxList>
                </DropList>
                <DropList title="Субрегион">
                    <CheckBoxList items={[
                        "Россия", "Италия", "Франция", "Испания",
                        "Англия", "Чехия", "Австрия", "Португалия",
                        "Щвейцария", "Нидерланды", "Люксембург", "Польша"
                    ]}></CheckBoxList>
                </DropList>
                <DropList title="Производитель">
                    <CheckBoxList items={[
                        "Россия", "Италия", "Франция", "Испания",
                        "Англия", "Чехия", "Австрия", "Португалия",
                        "Щвейцария", "Нидерланды", "Люксембург", "Польша"
                    ]}></CheckBoxList>
                </DropList>
                <DropList title="Бренд">
                    <CheckBoxList items={[
                        "Россия", "Италия", "Франция", "Испания",
                        "Англия", "Чехия", "Австрия", "Португалия",
                        "Щвейцария", "Нидерланды", "Люксембург", "Польша"
                    ]}></CheckBoxList>
                </DropList>
                <DropList title="Стиль">
                    <CheckBoxList items={[
                        "Россия", "Италия", "Франция", "Испания",
                        "Англия", "Чехия", "Австрия", "Португалия",
                        "Щвейцария", "Нидерланды", "Люксембург", "Польша"
                    ]}></CheckBoxList>
                </DropList>
                <DropList title="Крепость">
                    <CheckBoxList items={[
                        "Россия", "Италия", "Франция", "Испания",
                        "Англия", "Чехия", "Австрия", "Португалия",
                        "Щвейцария", "Нидерланды", "Люксембург", "Польша"
                    ]}></CheckBoxList>
                </DropList>
                <DropList title="Объем">
                    <CheckBoxList items={[
                        "Россия", "Италия", "Франция", "Испания",
                        "Англия", "Чехия", "Австрия", "Португалия",
                        "Щвейцария", "Нидерланды", "Люксембург", "Польша"
                    ]}></CheckBoxList>
                </DropList>
                <div className="p-[18px] w-[100%] flex items-center justify-around rounded-[0_0_5px_5px] bg-[#262626]">
                    <button className="w-[100%]"><u className="text-neutral-0 fw-500 fs-15">Сбросить</u></button>
                    <Button>Показать 3572</Button>
                </div>
            </div>
            <div className="w1024-min:hidden bg-[var(--color-primary)] wrap">
                <ul className="flex justify-around py-[.5rem]">
                    <li className="flex gap-1 items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 6L17 18" stroke="white" strokeLinecap="round"/>
                            <path d="M12 6L12 18" stroke="white" strokeLinecap="round"/>
                            <path d="M7 6L7 18" stroke="white" strokeLinecap="round"/>
                            <path d="M5 8H9" stroke="white" strokeLinecap="round"/>
                            <path d="M10 16H14" stroke="white" strokeLinecap="round"/>
                            <path d="M15 12H19" stroke="white" strokeLinecap="round"/>
                        </svg>
                        <span className="text-neutral-0 text-[14px] underline">Фильтры</span>
                    </li>
                    <li className="flex gap-1 items-center">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.125 3.4375L11.5625 1M11.5625 1L14 3.4375M11.5625 1L11.5625 14M5.875 11.5625L3.4375 14M3.4375 14L1 11.5625M3.4375 14L3.4375 1"
                                stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-neutral-0 text-[14px] underline">Сортировка</span>
                    </li>
                </ul>
            </div>
        </>
    );
}


const CheckBoxList: FC<{ items: string[] }> = ({items}): JSX.Element => {
    return (
        <div className="w-[100%]">
            {
                items.length > 6 ?
                    <label className={classnames(c["search-input"], "mb-[15px]")}><input type="text"/></label> : ""
            }
            <ul className={classnames(items.length > 6 ? classnames(c["checkbox-list"], c["checkbox-list--scroll"]) : c["checkbox-list"])}>
                {
                    items.map(
                        (el) => <Fragment key={uuid()}>
                            <li><CheckBoxLabel>{el}</CheckBoxLabel></li>
                        </Fragment>
                    )
                }
            </ul>
        </div>
    );
}
const CheckBoxLabel: FC<PropsWithChildren<ICatalogCheckboxLabel>> = ({children}) => {
    const [active, setActive] = useState<boolean>(false);
    return <button onClick={() => setActive(!active)}
                   className={!active ? c.checkbox : classnames(c.checkbox, c.active)}><span
        className="fs-15 text-neutral-900 fw-400 whitespace-nowrap">{children}</span></button>;
}
const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    const {className = ""} = props;

    return (
        <input {...props} type="number" className={classnames(c.input, className)}/>
    )
};
const RangeSlider: FC<ICatalogRangeSlider> = (props) => {
    const {initialMin, initialMax, min, max, step, priceCap, className = ""} = props;
    const progressRef = useRef(null);
    const [minValue, setMinValue] = useState<number>(parseInt(initialMin));
    const [maxValue, setMaxValue] = useState<number>(parseInt(initialMax));

    const handleMin = ({currentTarget}: FormEvent<HTMLInputElement>) => {
        if (maxValue - minValue >= priceCap && maxValue <= max) {
            if (parseInt(currentTarget.value) > maxValue) {
            } else {
                setMinValue(parseInt(currentTarget.value));
            }
        } else {
            if (parseInt(currentTarget.value) < minValue) {
                setMinValue(parseInt(currentTarget.value));
            }
        }
    };

    const handleMax = ({currentTarget}: FormEvent<HTMLInputElement>) => {
        if (maxValue - minValue >= priceCap && maxValue <= max) {
            if (parseInt(currentTarget.value) < minValue) {
            } else {
                setMaxValue(parseInt(currentTarget.value));
            }
        } else {
            if (parseInt(currentTarget.value) > maxValue) {
                setMaxValue(parseInt(currentTarget.value));
            }
        }
    };

    useEffect(() => {
        // @ts-ignore
        progressRef.current.style.left = (minValue / max) * step + "%";
        // @ts-ignore
        progressRef.current.style.right = step - (maxValue / max) * step + "%";
    }, [minValue, maxValue, max, step]);

    return (
        <div className={className}>
            <div className="flex flex-col w-[100%] rounded-lg">
                <div className="flex gap-[6px] mb-[14px]">
                    <Input
                        onChange={({currentTarget}: FormEvent<HTMLInputElement>) => setMinValue(parseInt(currentTarget.value))}
                        value={minValue}
                        className="w-24 rounded-md border border-gray-400"
                    ></Input>
                    <Input
                        onChange={({currentTarget}: FormEvent<HTMLInputElement>) => setMaxValue(parseInt(currentTarget.value))}
                        value={maxValue}
                        className="w-24 rounded-md border border-gray-400"
                    ></Input>
                </div>

                <div className="mb-4">
                    <div className="slider relative h-1 rounded-md bg-gray-300">
                        <div
                            style={{background: "var(--gradient-rainbow)"}}
                            className="progress absolute h-1 rounded"
                            ref={progressRef}
                        ></div>
                    </div>

                    <div className="range-input relative">
                        <input
                            onChange={handleMin}
                            type="range"
                            min={min}
                            step={step}
                            max={max}
                            value={minValue}
                            className={classnames(c["rangeInput"], "absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none")}
                        />

                        <input
                            onChange={handleMax}
                            type="range"
                            min={min}
                            step={step}
                            max={max}
                            value={maxValue}
                            className={classnames(c["rangeInput"], "absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none")}
                        />
                    </div>
                    <div className="flex justify-between items-center mt-[10px]">
                        <span className="fs-15 fw-400 text-neutral-500">0</span>
                        <span className="fs-15 fw-400 text-neutral-500">1 000 000</span>
                    </div>
                </div>
            </div>
        </div>
    );
};