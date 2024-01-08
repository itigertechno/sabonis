import {Breadcrumbs} from "@shared/Breadcrumbs";
import {Button} from "@shared/Button";
import {Link} from "react-router-dom";
import preview from "@pictures/profile/plastic-card.png";
import c from "./style.module.css";
import classnames from "@utils/classnames.ts";
import {FormInput} from "@shared/FormInput";

export function ProfilePointsPage() {
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
                            <span className="fs-15 uppercase text-neutral-0 w-[100%] block text-center leading-[50px]">История заказов</span>
                        </div>
                        <div className="mt-[30px] flex gap-[30px] w1260:flex-col-reverse">
                            <div className={classnames(c.card, "rounded-[5px] w-[50%]")}
                                 style={{backgroundImage: `url("${preview}")`}}>
                                <span
                                    className="text-right fs-55 fw-500 text-neutral-0 block pr-[30px] pt-[5px] w468:text-[3rem] w468:mt-[3%] w360:!mt-[10%] ml-auto w360:w-fit w360:scale-[60%]">10%</span>
                                <span
                                    className="block mt-[70px] ml-[25px] fs-30 fw-600 text-neutral-0 w360:mt-[20px] w468:mt-[30px]">Бонусная карта</span>
                                <span className="block mt-[5px] ml-[25px] fs-15 fw-400 text-neutral-0">Номер вашей карты:</span>
                                <span
                                    className="block mt-[5px] ml-[25px] fs-15 fw-600 text-neutral-0">2023 4569 87</span>
                            </div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h3 className="text-neutral-900 fs-20 fw-500">Баллов на счету: <b
                                        className="text-primary">13 998</b></h3>
                                    <p className="mt-[30px] fs-15 text-neutral-900">
                                        Текущий уровень: 10%. Для перехода на следующий уровень (15%) вам нужно
                                        потратить еще 37560 ₽
                                    </p>
                                </div>
                                <div className="h-max">
                                    <span className="fs-20 fw-500 text-neutral-900">Активировать промокод</span>
                                    <div className="grid grid-cols-2 items-center gap-[10px] mt-[20px] w1330:grid-cols-1">
                                        <FormInput label="" placeholder="Промокод"></FormInput>
                                        <Button className="w-[100%] h-[100%]">Активировать</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" border-[1px] border-[#D6D7D9] h-fit rounded-[5px]">
                        <div
                            className="py-[5px] bg-[var(--color-primary)] border-[var(--color-primary) rounded-[5px_5px_0_0]">
                            <span
                                className="fs-15 uppercase text-neutral-0 text-center leading-[50px] w-[100%] block">Меню</span>
                        </div>
                        <div className="px-[20px] py-[40px]">
                            <Link className="text-neutral-900 fs-20 fw-400 leading-[20px] block mb-[15px]"
                                  to="/profile">Личные
                                данные</Link>
                            <Link className="text-neutral-900 fs-20 fw-400 leading-[20px] block mb-[15px]"
                                  to="/profile/history">История заказов</Link>
                            <Link className="text-neutral-900 fs-20 fw-400 leading-[20px] block mb-[15px]"
                                  to="/profile/store">Купленные товары</Link>
                            <Link className="text-primary fs-20 fw-400 leading-[20px] block" to="/profile/points">Баллы
                                (1999)</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="wrap mt-[40px] mb-[40px]">
                <h3 className="fs-24 fw-500 text-neutral-900">У вас пока нет заказов</h3>
                <p className="fs-15 fw-400 text-neutral-900 mt-[30px]">Перейдите в каталог, чтобы начать покупки.</p>
                <div className="w-fit">
                    <Link to="/catalog">
                        <Button className="mt-[30px]">
                            <span className="block px-[50px] text-neutral-0">Каталог</span>
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    );
}