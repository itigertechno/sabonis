import {Breadcrumbs} from "@shared/Breadcrumbs";
import {Slider} from "@widgets/Slider";
import {Card} from "@shared/Card";
import cardExample from "@utils/card-example.ts";
import preview from "@pictures/bottle.png";
import {SvgSprite} from "@shared/SvgSprite";
import {FC, HTMLAttributes, PropsWithChildren, useState} from "react";
import c from "./style.module.css";
import {Button} from "@shared/Button";
import classnames from "@utils/classnames.ts";
import {SwitchCounter} from "@shared/SwitchCounter";
import DropList from "@shared/DropList/DropList.tsx";

export function ProductPage() {
    const [vintage, setVintage] = useState<number>(0);
    const [volume, setVolume] = useState<number>(0);
    const [counterVisibility, setCounterVisibility] = useState<boolean>(false);

    return (
        <>
            <section className="wrap mt-[60px]">
                <Breadcrumbs linksArray={[
                    {
                        title: "Главная",
                        link: "/"
                    },
                    {
                        title: "Каталог",
                        link: "/catalog"
                    },
                    {
                        title: "Вино",
                        link: "/product"
                    }
                ]}></Breadcrumbs>
            </section>
            <section className="wrap mt-[36px] relative grid grid-cols-2 w1024:grid-cols-1 justify-between">
                <div
                    className="absolute flex flex-col w1024:w-[100%] w1024:left-0 w1024:wrap w1024:justify-between w1024:flex-row gap-[10px] left-[var(--wrap-padding)]">
                    <span>Арт. 324657</span>
                    <button>
                        <SvgSprite type="favorites"></SvgSprite>
                    </button>
                </div>
                <div className="flex items-center justify-center">
                    <img src={preview} alt="Preview of bottle" className="w1024:h-[320px]"/>
                </div>
                <div>
                    <h1 className="fs-30 fw-500 text-neutral-900">
                        Domaine Bastide Jourdan "Viogner en Fut" IGP Mediterranee
                    </h1>
                    <p className="fs-16 fw-300 text-neutral-900 mt-[10px]">
                        Домен Бастид Жордан "Вионье Фют" IGP Медитерране
                    </p>
                    <div className="flex mt-[36px] gap-[12px]">
                        <svg className="mt-1" width="20" height="16" viewBox="0 0 20 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_106_1189" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0"
                                  y="0" width="20" height="16">
                                <rect y="0.5" width="20" height="15" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_106_1189)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.75 0.5H20V15.5H13.75V0.5Z"
                                      fill="#F50100"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 0.5H7.5V15.5H0V0.5Z" fill="#2E42A5"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.25 0.5H13.75V15.5H6.25V0.5Z"
                                      fill="#F7FCFF"/>
                            </g>
                        </svg>
                        <p className="fs-16 fw-500 text-neutral-900">
                            Франция, <u className="fw-500 text-primary">Cotes du Rhone</u>, Домен Бастид
                            Жордан,<br/> белое, сухое, 2009г, 12% алк, 0,75л
                        </p>
                    </div>
                    <div
                        className="grid w1024:grid-cols-1 gap-y-[20px] w1024:gap-y-[10px] w1024:mb-[20px] mt-[30px] items-center">
                        <div className="flex gap-[1rem]">
                            <span className="fs-15 fw-600 text-neutral-900">Винтаж: </span>
                            <div className="grid grid-cols-5 gap-[6px]">
                                <ButtonTag identity={0} active={vintage} onClick={() => setVintage(0)}>2008</ButtonTag>
                                <ButtonTag identity={1} active={vintage} onClick={() => setVintage(1)}>2009</ButtonTag>
                                <ButtonTag identity={2} active={vintage} onClick={() => setVintage(2)}>2010</ButtonTag>
                                <ButtonTag identity={3} active={vintage} onClick={() => setVintage(3)}>2011</ButtonTag>
                                <ButtonTag identity={4} active={vintage} onClick={() => setVintage(4)}>2012</ButtonTag>
                                <ButtonTag identity={5} active={vintage} onClick={() => setVintage(5)}>2013</ButtonTag>
                            </div>
                        </div>
                        <div className="flex gap-[1rem]">
                            <span className="fs-15 fw-600 text-neutral-900">Объем (л): </span>
                            <div className="grid grid-cols-5 gap-[6px]">
                                <ButtonTag identity={0} active={volume} onClick={() => setVolume(0)}>0,75</ButtonTag>
                                <ButtonTag identity={1} active={volume} onClick={() => setVolume(1)}>1,5</ButtonTag>
                                <ButtonTag identity={2} active={volume} onClick={() => setVolume(2)}>3</ButtonTag>
                            </div>
                        </div>
                        <span className="fs-15 fw-600 text-neutral-900">Сортовой состав: <span className="fw-500">Вионье 100%</span></span>
                    </div>
                    <div className="mt-[13px]">
                        <span className="fs-16 fw-600 text-neutral-900">Наличие: </span>
                        <ul className={c.list}>
                            <li className="fs-16 fw-500 text-neutral-900">Петроградская наб - 7 шт,</li>
                            <li className="fs-16 fw-500 text-neutral-900">ул. Жуковского - под заказ</li>
                        </ul>
                    </div>
                    <div className="flex gap-[18px] mt-[30px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.5 19.5C5.5 19.5 9 18 10 17C11 16 8 16 8 11C8 6 12 6 12 6C12 6 16 6 16 11C16 16 13 16 14 17C15 18 18.5 19.5 18.5 19.5"
                                stroke="#494949" strokeWidth="2" strokeLinecap="round"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                  stroke="#494949" strokeWidth="2"/>
                        </svg>
                        <p className="fs-15 fw-500 text-neutral-900">
                            Эта покупка принесет вам 1 000 рублей на <br/> бонусный счет, если вы
                            <u className="text-primary"> авторизуетесь</u> или <br/>
                            <u className="text-primary"> зарегистрируетесь</u>.
                        </p>
                    </div>
                    <div className="flex gap-[50px] w1024:flex-col-reverse w1024:gap-1 mt-[24px]">
                        <label className="border-b border-[var(--color-neutral-900)] flex">
                            <input type="text"
                                   className="w-[100%] placeholder:opacity-100 px-[5px] outline-0 leading-[50px]"
                                   placeholder="Промокод"/>
                            <button>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M16.8352 9.10544C17.576 9.47292 17.576 10.5297 16.8352 10.8971L3.94535 17.2909C3.28063 17.6206 2.50098 17.137 2.50098 16.395V11.6667L10.001 10L2.50098 8.16202L2.50098 3.60754C2.50098 2.86555 3.28063 2.38198 3.94534 2.7117L16.8352 9.10544Z"
                                          stroke="#367639" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </label>
                        <div>
                            <span className="block fs-20 fw-600 text-danger text-right line-through leading-[1px]">15 000₽</span>
                            <span className="block fs-30 fw-600 text-neutral-900 w1024:text-right">10 000₽</span>
                        </div>
                    </div>
                    <div className="mt-[30px] w-[50%]">
                        {
                            counterVisibility ?
                                <>
                                    <SwitchCounter onChange={() => {
                                    }}></SwitchCounter>
                                </> :
                                <>
                                    <Button onClick={() => setCounterVisibility(true)}>
                                        <SvgSprite type="shopping-basket"></SvgSprite>
                                        <span className="fs-15 text-neutral-0 fw-500">В корзину</span>
                                    </Button>
                                </>
                        }
                    </div>
                </div>
            </section>
            <section className="w1024-min:wrap mt-[60px]">
                <div className="w1024-min:wrap">
                    <h2 className="fs-20 text-neutral-900 fw-600 text-center">Информация о товаре</h2>
                </div>
                <div className="w1024-min:wrap mt-[50px]">
                    <DropList title="Описание" bold>
                        <div className="w1024:wrap pb-[18px]">
                            <p className="mt-[20px] fs-15 text-neutral-900 fw-400">
                                Domaine Bastide Jourdan "Viognier en Fut" IGP Méditerranée - это изысканное белое вино,
                                произведенное в аппеласьоне IGP Méditerranée на юге Франции. Это вино придется по вкусу
                                ценителям
                                изысканных белых сортов, и оно носит в себе характерные черты винограда Вионье.
                            </p>
                            <p className="mt-[30px] fs-15 text-neutral-900 fw-400">
                                Аромат этого вина очаровывает нотами белых цветов, спелых персиков и нежными акцентами
                                ванили от
                                длительного выдерживания в дубовых бочках. Вкус обладает отличным балансом между фруктовой
                                сладостью и мягкой кислотностью, что делает его приятным и гармоничным.
                            </p>
                            <p className="mt-[30px] fs-15 text-neutral-900 fw-400">
                                "Viognier en Fut" идеально подходит к блюдам с морепродуктами, пастой, а также курицей или
                                тушеным овощам. Оно также прекрасно сочетается с сырами и представляет собой отличный
                                аперитив.
                            </p>
                        </div>
                    </DropList>
                </div>
                <div className="w1024-min:wrap w-[100%]">
                    <DropList title="Характеристики" bold>
                        <div className="w1024:wrap w-[100%] pb-[18px]">
                            <div className="grid grid-cols-[1fr_1px_1fr] justify-between mt-[20px] w1024:flex-col w-[100%]">
                                <div
                                    className="grid grid-cols-2 items-center w1024:pr-0 gap-[15px]">
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                </div>
                                <div className="w-full flex items-center justify-center">
                                    <div className="h-[100%] w-[1px] bg-[var(--color-neutral-900)]"></div>
                                </div>
                                <div
                                    className="grid grid-cols-2 items-center gap-[15px] w1024:mt-[10px] text-right w1024:ml-0">
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                </div>
                            </div>
                        </div>
                    </DropList>
                    <DropList title="Вкусоароматика" bold>
                        <div className="w1024:wrap w-[100%] pb-[18px]">
                            <div className="grid grid-cols-[1fr_1px_1fr] justify-between mt-[20px] w1024:flex-col w-[100%]">
                                <div
                                    className="grid grid-cols-2 items-center w1024:pr-0 gap-[15px]">
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                </div>
                                <div className="w-full flex items-center justify-center">
                                    <div className="h-[100%] w-[1px] bg-[var(--color-neutral-900)]"></div>
                                </div>
                                <div
                                    className="grid grid-cols-2 items-center gap-[15px] w1024:mt-[10px] text-right w1024:ml-0">
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                </div>
                            </div>
                        </div>
                    </DropList>
                    <DropList title="Производитель" bold>
                        <div className="w1024:wrap w-[100%] pb-[18px]">
                            <div className="grid grid-cols-[1fr_1px_1fr] justify-between mt-[20px] w1024:flex-col w-[100%]">
                                <div
                                    className="grid grid-cols-2 items-center w1024:pr-0 gap-[15px]">
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                </div>
                                <div className="w-full flex items-center justify-center">
                                    <div className="h-[100%] w-[1px] bg-[var(--color-neutral-900)]"></div>
                                </div>
                                <div
                                    className="grid grid-cols-2 items-center gap-[15px] w1024:mt-[10px] text-right w1024:ml-0">
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                </div>
                            </div>
                        </div>
                    </DropList>
                    <DropList title="Сорт винограда" bold>
                        <div className="w1024:wrap w-[100%] pb-[18px]">
                            <div className="grid grid-cols-[1fr_1px_1fr] justify-between mt-[20px] w1024:flex-col w-[100%]">
                                <div
                                    className="grid grid-cols-2 items-center w1024:pr-0 gap-[15px]">
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                </div>
                                <div className="w-full flex items-center justify-center">
                                    <div className="h-[100%] w-[1px] bg-[var(--color-neutral-900)]"></div>
                                </div>
                                <div
                                    className="grid grid-cols-2 items-center gap-[15px] w1024:mt-[10px] text-right w1024:ml-0">
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                    <span className="fs-15 fw-600 text-neutral-900">Название:</span>
                                    <span className="fs-15 fw-400 text-neutral-900">Матеуш Розе, 750 мл</span>
                                </div>
                            </div>
                        </div>
                    </DropList>
                    <hr className="border-[var(--color-neutral)]"/>
                </div>
            </section>
            <section className="wrap mt-[60px] mb-[30px]">
                <h2 className="fs-40 fw-300 text-neutral-900 w1024:!text-[30px]">Рекомендованные товары</h2>
                <div className="w-[100%] mt-[60px]">
                    <Slider perPage={4} tags={[
                        {
                            title: "Товары месяца",
                            id: 1
                        },
                        {
                            title: "Рекомендации сомелье",
                            id: 2
                        },
                        {
                            title: "Эксклюзив",
                            id: 7
                        },
                        {
                            title: "Товары недели",
                            id: 5
                        },
                        {
                            title: "Товары с наградами",
                            id: 3
                        },
                    ]}>
                        <Card {...cardExample}></Card>
                        <Card {...cardExample}></Card>
                        <Card {...cardExample}></Card>
                        <Card {...cardExample}></Card>
                    </Slider>
                </div>
            </section>
        </>
    );
}

const ButtonTag: FC<PropsWithChildren<HTMLAttributes<HTMLButtonElement>> & {
    active: number,
    identity: number
}> = (props) => {
    const {active, identity, children, onClick} = props;
    return (
        <button
            onClick={onClick}
            className={
                classnames(
                    "px-[8px] py-[5px] rounded-[5px] border-[1px] border-[var(--color-danger)] leading-[1] fs-13 fw-600 text-neutral-900",
                    active === identity ? "!bg-[var(--color-primary)] !text-[var(--color-neutral-0)] border-[var(--color-primary)]" : ""
                )
            }>{children}</button>
    )
}