import {Breadcrumbs} from "@shared/Breadcrumbs";
import cardExample from "@utils/card-example.ts";
import {BasketCard} from "@shared/BasketCard";
import {Button} from "@shared/Button";
import MediaQuery from "react-responsive";
import {MobileBasketCard} from "@shared/MobileBasketCard";
import {FC, useEffect, useState} from "react";
import {IMobileBasketStep} from "@shared/BasketCard/BasketCard.types.ts";
import {FormInput} from "@shared/FormInput";
import {Link} from "react-router-dom";

export function BasketPage() {
    const [pickup, setPickup] = useState<boolean>(false);

    return (
        <>
            <section className="wrap mt-[30px] mb-[60px]">
                <Breadcrumbs linksArray={[
                    {
                        title: "Главная",
                        link: "/"
                    },
                    {
                        title: "Корзина",
                        link: "/basket"
                    }
                ]}></Breadcrumbs>
                <h1 className="mt-[30px] fs-30 fw-500 text-neutral-900">Корзина</h1>
                <MediaQuery query="(min-width: 1331px)">
                    <div className="grid grid-cols-[1fr_40%] mt-[30px] gap-[40px]">
                        <div className="w-[100%] rounded-[5px] border-x-[1px] border-[#D6D7D9]">
                            <div
                                className="grid grid-cols-[2fr_1fr_1fr] py-[5px] bg-[var(--color-primary)] border-[1px] border-[var(--color-primary)]  rounded-[5px_5px_0_0]">
                            <span
                                className="fs-15 uppercase text-neutral-0 text-center leading-[50px]">Наименование</span>
                                <span className="fs-15 uppercase text-neutral-0 text-right leading-[50px]">Цена</span>
                                <span className="fs-15 uppercase text-neutral-0 text-center leading-[50px]">Итого</span>
                            </div>
                            <div>
                                <BasketCard {...cardExample}></BasketCard>
                                <BasketCard {...cardExample}></BasketCard>
                                <BasketCard {...cardExample}></BasketCard>
                                <BasketCard {...cardExample}></BasketCard>
                            </div>
                        </div>
                        <div className=" border-[1px] border-[#D6D7D9] h-fit rounded-[5px]">
                            <div
                                className="py-[5px] bg-[var(--color-primary)] border-[var(--color-primary) rounded-[5px_5px_0_0]">
                                <span
                                    className="fs-15 uppercase text-neutral-0 text-center leading-[50px] w-[100%] block">Оформление заказа</span>
                            </div>
                            <div className="px-[25px] pb-[25px] pt-[20px]">
                                <span className="fs-15 fw-500 text-neutral-900">Выберите пункт выдачи</span>
                                <ul className="mt-[25px]">
                                    <li>
                                        <button className="flex items-center gap-[25px]"
                                                onClick={() => setPickup(false)}>
                                            {
                                                PickUpSwitch(pickup, false)
                                            }
                                            <span>Петроградская наб, 8</span>
                                        </button>
                                    </li>
                                    <li className="mt-[20px]">
                                        <button className="flex items-center gap-[25px]"
                                                onClick={() => setPickup(true)}>
                                            {
                                                PickUpSwitch(pickup, true)
                                            }
                                            <span>ул. Жуковского, 10</span>
                                        </button>
                                    </li>
                                </ul>
                                <div className="flex gap-[18px] mt-[30px]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.5 19.5C5.5 19.5 9 18 10 17C11 16 8 16 8 11C8 6 12 6 12 6C12 6 16 6 16 11C16 16 13 16 14 17C15 18 18.5 19.5 18.5 19.5"
                                            stroke="#494949" strokeWidth="2" strokeLinecap="round"/>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                              stroke="#494949" strokeWidth="2"/>
                                    </svg>
                                    <p className="fs-15 fw-500 text-neutral-900">
                                        Эта покупка принесет вам 1 000 рублей на <br/> бонусный счет, если вы
                                        <Link to="/profile"><u
                                            className="text-primary"> авторизуетесь</u></Link> или <br/>
                                        <Link to="/profile"><u className="text-primary"> зарегистрируетесь</u></Link>.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 mt-[32px]">
                                    <span className="fs-15 fw-400 text-neutral-500 self-center">Ваша скидка:</span>
                                    <span
                                        className="fs-30 fw-400 text-primary leading-[50px] text-right">- 49 405 ₽</span>
                                    <span className="fs-15 fw-400 text-neutral-500 self-center">Итоговая сумма:</span>
                                    <span
                                        className="fs-40 fw-400 text-neutral-900 leading-[50px] text-right">279 965 ₽</span>
                                </div>
                                <label className="border-b border-[var(--color-neutral-900)] flex mt-[20px]">
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
                                <Button className="mt-[30px]">Оформить заказ</Button>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery query="(max-width: 1330px)">
                    <MobileBasketSteps pickup={pickup} setPickup={setPickup}></MobileBasketSteps>
                </MediaQuery>
            </section>
        </>
    );
}

const MobileBasketSteps: FC<{ setPickup: (newValue: boolean) => void; pickup: boolean }> = ({setPickup, pickup}) => {
    const [step, setStep] = useState<number>(0);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [step])

    switch (step) {
        case 0:
            return <MobileFirstStep step={step} setStep={setStep} pickup={pickup}
                                    setPickup={setPickup}></MobileFirstStep>;
        case 1:
            return <MobileSecondStep step={step} setStep={setStep} pickup={pickup}
                                     setPickup={setPickup}></MobileSecondStep>;
        case 2:
            return <MobileThirdStep step={step} setStep={setStep} pickup={pickup}
                                    setPickup={setPickup}></MobileThirdStep>;
        case 3:
            return <MobileFourthStep></MobileFourthStep>;
        default:
            return <MobileFirstStep step={step} setStep={setStep} pickup={pickup}
                                    setPickup={setPickup}></MobileFirstStep>;
    }
}

const MobileFirstStep = ({setStep}: IMobileBasketStep) => {
    return (
        <>
            <MobileBasketCard {...cardExample}></MobileBasketCard>
            <MobileBasketCard {...cardExample}></MobileBasketCard>
            <MobileBasketCard {...cardExample}></MobileBasketCard>
            <MobileBasketCard {...cardExample}></MobileBasketCard>
            <div className="px-[25px] pb-[25px] pt-[20px]">
                <div className="grid grid-cols-2 w260:grid-cols-1 mt-[32px]">
                    <span className="fs-15 fw-400 text-neutral-500 self-center">Ваша скидка:</span>
                    <span className="fs-30 fw-400 text-primary leading-[50px] text-right">- 49 405 ₽</span>
                    <span className="fs-15 fw-400 text-neutral-500 self-center">Итоговая сумма:</span>
                    <span
                        className="fs-40 fw-400 text-neutral-900 leading-[50px] text-right">279 965 ₽</span>
                </div>
                <label className="border-b border-[var(--color-neutral-900)] flex mt-[20px]">
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
                <Button onClick={() => setStep(1)} className="mt-[30px]">Оформить заказ</Button>
            </div>
        </>
    )
        ;
}
const MobileSecondStep = ({setStep, pickup, setPickup}: IMobileBasketStep) => {
    return (
        <div>
            <span className="fs-15 fw-500 text-neutral-900">Выберите пункт выдачи</span>
            <ul className="mt-[25px]">
                <li>
                    <button className="flex items-center gap-[25px]" onClick={() => setPickup(false)}>
                        {
                            PickUpSwitch(pickup, false)
                        }
                        <span>Петроградская наб, 8</span>
                    </button>
                </li>
                <li className="mt-[20px]">
                    <button className="flex items-center gap-[25px]" onClick={() => setPickup(true)}>
                        {
                            PickUpSwitch(pickup, true)
                        }
                        <span>ул. Жуковского, 10</span>
                    </button>
                </li>
            </ul>
            <div className="flex gap-[18px] mt-[30px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.5 19.5C5.5 19.5 9 18 10 17C11 16 8 16 8 11C8 6 12 6 12 6C12 6 16 6 16 11C16 16 13 16 14 17C15 18 18.5 19.5 18.5 19.5"
                        stroke="#494949" strokeWidth="2" strokeLinecap="round"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="#494949" strokeWidth="2"/>
                </svg>
                <p className="fs-15 fw-500 text-neutral-900">
                    Эта покупка принесет вам 1 000 рублей на <br/> бонусный счет, если вы
                    <Link to="/profile"><u className="text-primary"> авторизуетесь</u></Link> или <br/>
                    <Link to="/profile"><u className="text-primary"> зарегистрируетесь</u></Link>.
                </p>
            </div>
            <form className="mt-[30px]">
                <legend>Контактная информация</legend>
                <FormInput label="" placeholder="Имя*" className="block mt-[23px]"></FormInput>
                <FormInput label="" placeholder="Телефон*" className="block mt-[20px]"></FormInput>
                <FormInput label="" type="email" placeholder="Email" className="block mt-[20px]"></FormInput>
                <Button onClick={() => setStep(2)} className="mt-[30px]">Отправить</Button>
            </form>
        </div>
    );
}
const MobileThirdStep = ({setStep, pickup, setPickup}: IMobileBasketStep) => {
    return (
        <div>
            <ul className="mt-[25px]">
                <li>
                    <button className="flex items-center gap-[25px]" onClick={() => setPickup(false)}>
                        {
                            PickUpSwitch(pickup, false)
                        }
                        <span>Петроградская наб, 8</span>
                    </button>
                </li>
                <li className="mt-[20px]">
                    <button className="flex items-center gap-[25px]" onClick={() => setPickup(true)}>
                        {
                            PickUpSwitch(pickup, true)
                        }
                        <span>ул. Жуковского, 10</span>
                    </button>
                </li>
            </ul>
            <p className="fs-15 fw-500 text-neutral-900 mt-[32px]">Баланс</p>
            <p className="fs-15 text-neutral-900">
                На вашем счету <b>13 998</b> бонусных баллов.
            </p>
            <div className="mt-[20px]">
                <svg className="inline align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <rect x="21.5" y="2.5" width="19" height="19" rx="1.5" transform="rotate(90 21.5 2.5)"
                          fill="#367639" stroke="#CECECE" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66663 12.6667L9.99996 16L17.3333 8.66669" stroke="white" strokeLinecap="round"/>
                </svg>
                <span className="align-middle ml-[20px]">Использовать для оплаты заказа</span>
            </div>
            <Button className="mt-[30px]" onClick={() => setStep(3)}>Отправить</Button>
        </div>
    );
}

const MobileFourthStep = () => {
    return (
        <>
            <MobileBasketCard hasClose={false} counterLock={true}  {...cardExample}></MobileBasketCard>
            <MobileBasketCard hasClose={false} counterLock={true}  {...cardExample}></MobileBasketCard>
            <MobileBasketCard hasClose={false} counterLock={true}  {...cardExample}></MobileBasketCard>
            <MobileBasketCard hasClose={false} counterLock={true}  {...cardExample}></MobileBasketCard>
            <div className="px-[25px] pb-[25px] pt-[20px]">
                <div className="grid grid-cols-2 w260:grid-cols-1 mt-[32px] w768:grid-cols-[fit-content(100%)_1fr]">
                    <span className="fs-15 fw-400 text-neutral-500 self-center">Ваша скидка:</span>
                    <span className="fs-30 fw-400 text-primary leading-[50px] text-right">- 49 405 ₽</span>
                    <span className="fs-15 fw-400 text-neutral-500 self-center">Итоговая сумма:</span>
                    <span
                        className="fs-40 fw-400 text-neutral-900 leading-[50px] text-right">279 965 ₽</span>
                </div>
            </div>
        </>
    );
}

const PickUpSwitch = (pickup: boolean, condition: boolean) => {
    return pickup === condition ?
        <>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9" stroke="#367639" strokeWidth="2"/>
                <circle cx="10" cy="10" r="6" fill="#367639"/>
            </svg>
        </> :
        <>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9" stroke="#367639" strokeWidth="2"/>
            </svg>
        </>
}