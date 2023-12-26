import classnames from "@utils/classnames.ts";
import c from "./style.module.css";
import {Link} from "react-router-dom";
import {IBasketCard} from "@shared/BasketCard/BasketCard.types.ts";
import {Counter} from "@shared/Counter";
import {useState} from "react";

export function MobileBasketCard(props: IBasketCard) {
    const {
        title,
        description,
        preview,
        vendorCode,
        price,
        discount,
        hasClose = true,
        className = ""
    } = props;
    const [count, setCount] = useState<number>(1);
    return (
        <article className={classnames(c.article, "py-[12px]", className)}>
            <div className="grid grid-cols-[fit-content(100%)_1fr] gap-[1rem] items-center">
                <img src={preview} alt={`Preview of ${title}`} className={c.article__preview}/>
                <div className="self-start mt-[6px] w-[100%]">
                    <span className="fs-14 fw-400 text-neutral-900 mt-[15px] block">Арт. {vendorCode}</span>
                    <Link to="product">
                        <h3 className="text-neutral-900 fs-16 fw-500">{title}</h3>
                    </Link>
                    <p className="text-neutral-900 fs-12 fw-400 mt-[10px]">{description}</p>
                </div>
                {
                    hasClose ?
                        <>
                            <button className="absolute right-0 top-[12px]">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="26.9949" height="2.69949"
                                          transform="matrix(0.70707 0.707143 -0.70707 0.707143 1.91016 0)"
                                          fill="#D6D7D9"/>
                                    <rect width="26.9949" height="2.69949"
                                          transform="matrix(-0.70707 0.707143 -0.70707 -0.707144 21 1.91016)"
                                          fill="#D6D7D9"/>
                                </svg>
                            </button>
                        </> : ""
                }
            </div>
            <div className="w1024-min:grid-cols-[fit-content(100%)_fit-content(100%)_fit-content(100%)]  grid grid-cols-3 mt-[16px] items-center gap-x-[30px] gap-y-[10px]">
                <span className="text-center fs-10 fw-400 text-[#777777]">Цена</span>
                <span className="text-center fs-10 fw-400 text-[#777777]">Количество</span>
                <span className="text-center fs-10 fw-400 text-[#777777]">Итого</span>
                <span className="text-center fs-20 fw-500 text-neutral-900">{discount ?? price}</span>
                <Counter startValue={count} onChange={setCount}></Counter>
                <span className="fs-24 fw-400 text-neutral-900 text-center">
                    {discount ? discount * count : price * count}₽
                </span>
            </div>
        </article>
    );
}