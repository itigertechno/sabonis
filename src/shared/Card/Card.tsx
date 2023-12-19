import {ICard} from './Card.types';
import {Button} from "@shared/Button";
import {SvgSprite} from "@shared/SvgSprite";
import c from "./style.module.css";
import {useNavigate} from "react-router-dom";
import classnames from "@utils/classnames.ts";

export function Card({stock, title, description, preview, vendorCode, price, discount}: ICard) {
    const navigate = useNavigate();

    const toPage = () => navigate("/product");

    return (
        <article className={classnames(c.article, "p-[14px]")}>
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
            <h3 className="text-neutral-900 fs-16 fw-500 text-center mt-[10px] pl-[20px] pr-[20px]">{title}</h3>
            <p className="text-neutral-900 fs-12 fw-400 text-center mt-[13px] pl-[36px] pr-[36px] mb-[20px]">{description}</p>
            {
                discount ?
                    <>
                        <div className="flex gap-[1rem] items-center h-fit">
                            <div className={c.article__discount}>
                                <span className="fs-14 fw-600 text-neutral-900 line-through">{price}</span>
                                <span className="text-neutral-0 fw-600 fs-10">-{Math.round(100 - (discount*100/price))}%</span>
                            </div>
                            <span className="fs-24 fw-600 text-neutral-900">{discount}₽</span>
                        </div>
                    </> : <span className="fs-24 fw-600 text-neutral-900">{price}₽</span>
            }
            {
                stock ?
                    <>
                        <div className="pl-[36px] pr-[36px] w-[100%] mt-auto">
                            <Button theme="fill" className="mt-[14px]" onClick={() => toPage()}>
                                <div>
                                    <SvgSprite type="shopping-basket" className="fill-neutral-0"></SvgSprite>
                                </div>
                                <span className="text-neutral-0 fs-14 fw-500">Купить</span>
                            </Button>
                        </div>
                    </> :
                    <>
                        <div className="pl-[36px] pr-[36px] w-[100%] mt-auto">
                            <Button theme="transparent" className="mt-[14px]" onClick={() => toPage()}>
                                <div>
                                    <SvgSprite type="shopping-basket" className="fill-primary"></SvgSprite>
                                </div>
                                <span className="text-primary fs-14 fw-500">Купить</span>
                            </Button>
                        </div>
                    </>
            }
        </article>
    );
}
