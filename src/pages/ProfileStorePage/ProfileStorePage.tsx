import {Breadcrumbs} from "@shared/Breadcrumbs";
import {Button} from "@shared/Button";
import {Link} from "react-router-dom";
import cardExample from "@utils/card-example.ts";
import {InlineCard} from "@shared/InlineCard";
import MediaQuery from "react-responsive";
import {MobileBasketCard} from "@shared/MobileBasketCard";

export function ProfileStorePage() {
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
                <div className="grid grid-cols-[1fr_40%] w1024:flex w1024:flex-col-reverse mt-[30px] gap-[40px]">
                    <div className="w-[100%]">
                        <div
                            className="py-[5px] bg-[var(--color-primary)] border-[1px] border-[var(--color-primary)]  rounded-[5px_5px_0_0]">
                            <span className="fs-15 uppercase text-neutral-0 w-[100%] block text-center leading-[50px]">Купленные товары</span>
                        </div>
                        <div className="border-x-[1px] border-[var(--color-neutral-700)] px-[20px]">
                            <MediaQuery query="(min-width: 1025px)">
                                <InlineCard hasCheckbox={false} {...cardExample}></InlineCard>
                                <InlineCard hasCheckbox={false} {...cardExample}></InlineCard>
                                <InlineCard hasCheckbox={false} {...cardExample}></InlineCard>
                                <InlineCard hasCheckbox={false} {...cardExample}></InlineCard>
                            </MediaQuery>
                            <MediaQuery query="(max-width: 1024px)">
                                <MobileBasketCard hasClose={false} counterLock={true} {...cardExample}></MobileBasketCard>
                                <MobileBasketCard hasClose={false} counterLock={true} {...cardExample}></MobileBasketCard>
                                <MobileBasketCard hasClose={false} counterLock={true} {...cardExample}></MobileBasketCard>
                                <MobileBasketCard hasClose={false} counterLock={true} {...cardExample}></MobileBasketCard>
                            </MediaQuery>
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
                            <Link className="text-neutral-900 fs-20 fw-400 leading-[20px] block mb-[15px]"
                                  to="/profile/history">История заказов</Link>
                            <Link className="text-primary fs-20 fw-400 leading-[20px] block mb-[15px]"
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