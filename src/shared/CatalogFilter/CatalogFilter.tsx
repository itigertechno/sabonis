import {ICatalogCheckboxLabel, ICatalogDropList, ICatalogFilter, ICatalogRangeSlider} from './CatalogFilter.types';
import c from "./style.module.css";
import {
    FC,
    FormEvent, Fragment,
    InputHTMLAttributes,
    PropsWithChildren,
    SVGProps,
    useEffect,
    useRef,
    useState
} from "react";
// import {Button} from "@shared/Button";
import classnames from "@utils/classnames.ts";
import uuid from "react-uuid";
import {Button} from "@shared/Button";

export function CatalogFilter({}: ICatalogFilter) {
    return (
        <div className={c.wrapper}>
            <div className="p-[18px] w-[100%] flex items-center justify-around rounded-[5px_5px_0_0] bg-[#F4F4F4]">
                <CheckBoxLabel>
                    В наличии
                </CheckBoxLabel>
                <CheckBoxLabel>
                    Со скидкой
                </CheckBoxLabel>
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
            <DropList title="Цвет">
                <CheckBoxList items={[
                    "Белое", "Красное", "Розовое", "Оранжевое",
                    "Белое", "Красное", "Розовое", "Оранжевое",
                    "Белое", "Красное", "Розовое", "Оранжевое"
                ]}></CheckBoxList>
            </DropList>
            <div className="p-[18px] w-[100%] flex items-center justify-around rounded-[0_0_5px_5px] bg-[#262626]">
                <button className="w-[100%]"><u className="text-neutral-0 fw-500 fs-15">Сбросить</u></button>
                <Button>Показать 3572</Button>
            </div>
        </div>
    );
}


const CheckBoxList: FC<{ items: string[] }> = ({items}): JSX.Element => {
    return (
        <div className="w-[100%]">
            {
                items.length > 6 ? <label className={classnames(c["search-input"], "mb-[15px]")}><input type="text"/></label> : ""
            }
            <ul className={classnames(items.length > 6 ? classnames(c["checkbox-list"], c["checkbox-list--scroll"]) : c["checkbox-list"])}>
                {
                    items.map(
                        (el) => <Fragment key={uuid()}><li><CheckBoxLabel>{el}</CheckBoxLabel></li></Fragment>
                    )
                }
            </ul>
        </div>
    );
}
const DropList: FC<PropsWithChildren<ICatalogDropList>> = ({children, title, className = ""}) => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <div className={classnames(c.droplist, className)}>
            <button className="w-[100%] flex items-center justify-between" onClick={() => {
                setActive(!active)
            }}>
                <span>{title}</span>
                <Arrow type="arrow-vertical" className={active ? "rotate-180" : ""}></Arrow>
            </button>
            <div className={active ? "flex items-center gap-[6px] mt-[10px]" : "hidden"}>
                {
                    children
                }
            </div>
        </div>
    )
}
const Arrow: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.28 17.4L14.5 11.02L19.72 17.4" stroke="#494949" strokeWidth="1.2"/>
    </svg>
)
const CheckBoxLabel: FC<PropsWithChildren<ICatalogCheckboxLabel>> = ({ children }) => {
    const [active, setActive] = useState<boolean>(false);
    return <button onClick={() => setActive(!active)} className={!active ? c.checkbox : classnames(c.checkbox, c.active)}><span className="fs-15 text-neutral-900 fw-400">{ children }</span></button>;
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