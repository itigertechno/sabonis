import {IBasketCard} from './BasketCard.types';
import {Link} from "react-router-dom";
import classnames from "@utils/classnames.ts";
import c from "./style.module.css";

export function BasketCard({title, description, preview, vendorCode, price, discount}: IBasketCard) {

    return (
        <article className={classnames(c.article, "p-[14px]")}>
            <img src={preview} alt={`Preview of ${title}`} className={c.article__preview}/>
            <div className="self-start mt-[6px] w-[100%]">
                <Link to="product">
                    <h3 className="text-neutral-900 fs-16 fw-500">{title}</h3>
                </Link>
                <p className="text-neutral-900 fs-12 fw-400 mt-[15px]">{description}</p>
                <span className="fs-14 fw-400 text-neutral-900 mt-[15px] block">Арт. {vendorCode}</span>
            </div>
            {
                discount ?
                    <>
                        <div className="h-fit">
                            <span
                                className="fs-20 fw-400 text-danger line-through text-right block">{price}₽</span>
                            <span className="fs-24 fw-400 text-neutral-900 text-right block">{discount}₽</span>
                        </div>
                    </> : <span className="fs-24 fw-400 text-neutral-900 text-right">{price}₽</span>
            }
            <div>
                <div className="flex items-center justify-center gap-5">
                    <button>
                        <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="16" y="0.289062" width="1.61905" height="16" transform="rotate(90 16 0.289062)"
                                  fill="#B4B4B4"/>
                        </svg>
                    </button>
                    <span className="fs-24 fw-400 text-neutral-900">10</span>
                    <button>
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="7" y="0.619141" width="2" height="12.9524" fill="#B4B4B4"/>
                            <rect x="16" y="6.2832" width="1.61905" height="16" transform="rotate(90 16 6.2832)"
                                  fill="#B4B4B4"/>
                        </svg>
                    </button>
                </div>
                <span className="fs-24 fw-400 text-neutral-900 text-right">{discount ? discount * 10 : price * 10}₽</span>
            </div>
            <button>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="26.9949" height="2.69949" transform="matrix(0.70707 0.707143 -0.70707 0.707143 1.91016 0)" fill="#D6D7D9"/>
                    <rect width="26.9949" height="2.69949" transform="matrix(-0.70707 0.707143 -0.70707 -0.707144 21 1.91016)" fill="#D6D7D9"/>
                </svg>
            </button>
        </article>
    );
}
