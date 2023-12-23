import {ICardInline} from './InlineCard.types.ts';
import {Button} from "@shared/Button";
import {SvgSprite} from "@shared/SvgSprite";
import c from "./style.module.css";
import {useNavigate} from "react-router-dom";
import classnames from "@utils/classnames.ts";
import {useState} from "react";

export function InlineCard({stock, title, description, preview, vendorCode, price, discount, hasCheckbox = true}: ICardInline) {
    const navigate = useNavigate();
    const [selectActive, setSelectActive] = useState<boolean>(false);

    const toPage = () => navigate("/product");

    return (
        <article className={hasCheckbox ? classnames(c.article, "p-[14px]") : classnames(c.article, c["noCheckbox"], "p-[14px]")}>
            {
                hasCheckbox ?
                    <>
                        <div className="mr-[16px] h-fit">
                            <button onClick={() => setSelectActive(!selectActive)} className={selectActive ? classnames(c.select, c.active) : c.select}></button>
                        </div>
                    </> : ""
            }
            <img src={preview} alt={`Preview of ${title}`} className={c.article__preview}/>
            <div className="self-start mt-[6px] w-[60%]">
                <span className="fs-14 fw-400 text-neutral-900">Арт. {vendorCode}</span>
                <h3 className="text-neutral-900 fs-16 fw-500 mt-[10px]">{title}</h3>
                <p className="text-neutral-900 fs-12 fw-400 mt-[10px]">{description}</p>
            </div>
            {
                discount ?
                    <>
                        <div className="h-fit">
                            <span className="fs-15 fw-400 text-danger line-through text-right block leading-[0]">{price}₽</span>
                            <span className="fs-30 fw-500 text-neutral-900 text-right block">{discount}₽</span>
                        </div>
                    </> : <span className="fs-24 fw-600 text-neutral-900 text-right">{price}₽</span>
            }
            <div>
                <div className="flex items-center justify-center gap-5">
                    <button>
                        <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="16" y="0.289062" width="1.61905" height="16" transform="rotate(90 16 0.289062)" fill="#B4B4B4"/>
                        </svg>
                    </button>
                    <span className="fs-24 fw-400 text-neutral-900">10</span>
                    <button>
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="7" y="0.619141" width="2" height="12.9524" fill="#B4B4B4"/>
                            <rect x="16" y="6.2832" width="1.61905" height="16" transform="rotate(90 16 6.2832)" fill="#B4B4B4"/>
                        </svg>
                    </button>
                </div>
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
                                    <span className="text-primary fs-14 fw-500">В корзину</span>
                                </Button>
                            </div>
                        </>
                }
            </div>
        </article>
    );
}
