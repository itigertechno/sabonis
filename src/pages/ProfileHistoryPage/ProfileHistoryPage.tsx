import {Breadcrumbs} from "@shared/Breadcrumbs";
import {Button} from "@shared/Button";
import {Link} from "react-router-dom";
import cardExample from "@utils/card-example.ts";
import {BasketCard} from "@shared/BasketCard";
import {useState} from "react";
import classnames from "@utils/classnames.ts";

export function ProfileHistoryPage() {
    return (
        <>
            <section className="wrap mt-[30px]">
                <Breadcrumbs linksArray={[
                    {
                        title: "Главная",
                        link: "/"
                    },
                    {
                        title: "Личный кабинет",
                        link: "/profile"
                    }
                ]}></Breadcrumbs>
                <h1 className="mt-[30px] fs-30 fw-500 text-neutral-900">Личный кабинет</h1>
                <div className="grid grid-cols-[1fr_40%] mt-[30px] gap-[40px]">
                    <div className="w-[100%]">
                        <div
                            className="py-[5px] bg-[var(--color-primary)] border-[1px] border-[var(--color-primary)]  rounded-[5px_5px_0_0]">
                            <span className="fs-15 uppercase text-neutral-0 w-[100%] block text-center leading-[50px]">История заказов</span>
                        </div>
                        <div className="border-x-[1px] border-[var(--color-neutral-700)]">
                            <div className="grid grid-cols-6 bg-[#DBDCDE] px-[20px] py-[13px]">
                                <span className="fs-15 fw-400 text-black">Дата заказа</span>
                                <span className="fs-15 fw-400 text-black">Номер заказа</span>
                                <span className="fs-15 fw-400 text-black">Сумма</span>
                                <span className="fs-15 fw-400 text-black">Бонусы</span>
                                <span className="fs-15 fw-400 text-black">Статус</span>
                            </div>
                            <DropBasket></DropBasket>
                            <DropBasket></DropBasket>
                            <DropBasket></DropBasket>
                            <DropBasket></DropBasket>
                            <DropBasket></DropBasket>
                            <DropBasket></DropBasket>
                            <DropBasket></DropBasket>
                        </div>
                    </div>
                    <div className=" border-[1px] border-[#D6D7D9] h-fit rounded-[5px]">
                        <div
                            className="py-[5px] bg-[var(--color-primary)] border-[var(--color-primary) rounded-[5px_5px_0_0]">
                            <span
                                className="fs-15 uppercase text-neutral-0 text-center leading-[50px] w-[100%] block">Меню</span>
                        </div>
                        <div className="px-[20px] py-[40px]">
                            <Link className="text-neutral-900 fs-20 fw-400 leading-[20px] block mb-[15px]" to="/profile">Личные
                                данные</Link>
                            <Link className="text-primary fs-20 fw-400 leading-[20px] block mb-[15px]"
                                  to="/profile/history">История заказов</Link>
                            <Link className="text-neutral-900 fs-20 fw-400 leading-[20px] block mb-[15px]"
                                  to="/profile/store">Купленные товары</Link>
                            <Link className="text-neutral-900 fs-20 fw-400 leading-[20px] block" to="/profile/points">Баллы
                                (1999)</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="wrap mt-[40px] mb-[40px]">
                <h3 className="fs-24 fw-500 text-neutral-900">У вас пока нет заказов</h3>
                <p className="fs-15 fw-400 text-neutral-900 mt-[30px]">Перейдите в каталог, чтобы начать покупки.</p>
                <div className="w-fit">
                    <Button className="mt-[30px]">
                        <span className="block px-[50px] text-neutral-0">Каталог</span>
                    </Button>
                </div>
            </section>
        </>
    );
}

const DropBasket = () => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <div className="border-b-[1px] border-[var(--color-neutral-700)]">
            <button onClick={() => setActive(!active)} className="h-[50px] grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] w-[100%] bg-[#F5F5F5] text-left px-[20px] items-center">
                <span className="fs-15 fw-400 text-black">24.11.23</span>
                <span className="fs-15 fw-400 text-black">№546798</span>
                <span className="fs-15 fw-400 text-black">109 675 ₽</span>
                <span className="fs-15 fw-400 text-black">10 967 ₽</span>
                <span className="fs-15 fw-400 text-primary">Оплачен</span>
                {
                    active ?
                        <>
                            <svg className="justify-self-end" width="40" height="40" viewBox="0 0 40 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.2008 16L20.0008 24.8L12.8008 16" stroke="#494949" strokeWidth="1.2"/>
                            </svg>
                        </> :
                        <>
                            <svg className="justify-self-end"width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7992 24L19.9992 15.2L27.1992 24" stroke="#494949" strokeWidth="1.2"/>
                            </svg>
                        </>
                }
            </button>
            <div className={classnames(active ? "" : "hidden", "px-[20px] transition")}>
                <BasketCard hasClose={false} {...cardExample} className="!border-transparent"></BasketCard>
                <BasketCard hasClose={false} {...cardExample} className="!border-transparent"></BasketCard>
                <div className="w-[100%] flex justify-end">
                    <div className="grid grid-cols-2 justify-end items-end w-[50%] my-[20px]">
                        <span className="text-right fs-15 fw-400 leading-[25px] text-neutral-900">Ваша скидка:</span>
                        <span className="text-right fs-24 fw-400 text-primary leading-[25px]">- 49 405 ₽</span>
                        <span className="text-right fs-15 fw-400 leading-[25px] text-neutral-900">Итоговая сумма:</span>
                        <span className="text-right fs-24 fw-400 text-neutral-900 leading-[25px]">279 965 ₽</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
