import {ICard} from './Card.types';
import {Button} from "@shared/Button";
import {SvgSprite} from "@shared/SvgSprite";
import c from "./style.module.css";
import {useNavigate} from "react-router-dom";
import classnames from "@utils/classnames.ts";
import {useState} from "react";
import {SwitchCounter} from "@shared/SwitchCounter";

export function Card({stock, title, description, preview, vendorCode, price, discount, mosaic = false}: ICard) {
    const navigate = useNavigate();
    const [counter, setCounter] = useState<boolean>(false);

    const toPage = () => navigate("/product");

    return (
        <article className={classnames(c.article, mosaic ? c.mosaic : "", "p-[14px] pb-[20px] w1024:px-[0]")}>
            {
                stock ?
                    <>
                        <div className={c.article__tags}>
                            <div>
                                <div>
                                    <div
                                        className="w-[10px] h-[10px] rounded-[50%] mr-[10px] ml-[8px] bg-[var(--color-primary)]"></div>
                                    <span className="fs-10 fw-500 text-neutral-900">В наличии</span>
                                </div>
                                <div>
                                    <SvgSprite type="card-tag"></SvgSprite>
                                    <span className="fs-10 fw-500 text-neutral-900">{vendorCode}</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <SvgSprite type="error"></SvgSprite>
                                </div>
                                <div>
                                    <SvgSprite type="favorites"></SvgSprite>
                                </div>
                            </div>
                        </div>
                    </> :
                    null
            }
            <img src={preview} alt={`Preview of ${title}`} className={c.article__preview}/>
            <h3 className="text-neutral-900 fs-16 fw-500 text-center mt-[10px] pl-[20px] pr-[20px] w1024:px-[6px]">{title}</h3>
            <p className={classnames("text-neutral-900 fs-12 fw-400 text-center mt-[13px] pl-[36px] pr-[36px] mb-[20px] w1024:px-[6px]", mosaic ? "w1024:hidden" : "")}>{description}</p>
            <div className={mosaic ? "w1024:hidden" : ""}>
                {
                    discount ?
                        <>
                            <div className="flex gap-[1rem] items-center h-fit">
                                <div className={c.article__discount}>
                                    <span className="fs-14 fw-600 text-neutral-900 line-through">{price}</span>
                                    <span
                                        className="text-neutral-0 fw-600 fs-10">-{Math.round(100 - (discount * 100 / price))}%</span>
                                </div>
                                <span className="fs-24 fw-600 text-neutral-900">{discount}₽</span>
                            </div>
                        </> : <span className="fs-24 fw-600 text-neutral-900">{price}₽</span>
                }
            </div>
            <div
                className={classnames("pl-[36px] pr-[36px] w-[100%] mt-auto w1024:px-[6px]", mosaic ? "w1024:hidden" : "")}>
                {
                    counter ?
                        <>
                            <div className="mt-[14px]">
                                <SwitchCounter  onChange={() => {}}></SwitchCounter>
                            </div>
                        </> :
                        <>
                            <Button theme="transparent" className="mt-[14px]" onClick={() => setCounter(true)}>
                                <div>
                                    <SvgSprite type="shopping-basket" color="var(--color-primary)"></SvgSprite>
                                </div>
                                <span className="fs-14 fw-500 text-primary">Купить</span>
                            </Button>
                        </>
                }
            </div>
            <div
                className={classnames("w1024-min:hidden", mosaic ? "w1024:visible flex justify-around w-[100%] w1024:mt-[10px]" : "hidden")}>
                <button className={classnames()}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#367639"/>
                        <g clipPath="url(#clip0_14_47)">
                            <path
                                d="M31 17.25H27.2643L23.3395 10.7086C23.1448 10.3837 22.7225 10.2776 22.3962 10.473C22.0706 10.6684 21.9652 11.0907 22.1606 11.4163L25.6608 17.25H14.3393L17.8395 11.4162C18.0349 11.0906 17.9295 10.6683 17.6038 10.473C17.2769 10.2776 16.8559 10.3837 16.6605 10.7086L12.7358 17.2499H9.00001V18.6249H10.4922L12.2388 27.9418C12.4214 28.9173 13.274 29.6249 14.2664 29.6249H25.7337C26.726 29.6249 27.5786 28.9173 27.7606 27.9425L29.5078 18.6249H31.0001C31 18.6249 31 17.25 31 17.25V17.25ZM26.4091 27.6894C26.3487 28.0143 26.0646 28.25 25.7336 28.25H14.2664C13.9354 28.25 13.6514 28.0143 13.5903 27.6887L11.8907 18.6249H28.1094L26.4091 27.6894V27.6894Z"
                                fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_14_47">
                                <rect width="22" height="22" fill="white" transform="translate(9 9)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                {
                    discount ?
                        <>
                            <div className="">
                                <div>
                                    <span
                                        className="fs-15 fw-600 text-danger leading-[.5] line-through text-right block">{price}₽</span>
                                </div>
                                <span className="fs-24 fw-600 text-neutral-900">{discount}₽</span>
                            </div>
                        </> : <span className="fs-24 fw-600 text-neutral-900">{price}₽</span>
                }
            </div>
        </article>
    );
}
