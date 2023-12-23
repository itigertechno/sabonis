import {SvgSprite} from "@shared/SvgSprite";
import c from "./style.module.css";
import classnames from "@utils/classnames.ts";
import {Card} from "@shared/Card";
import {Slider} from "@widgets/Slider";

import actionsFirst from "@pictures/actions-1.png";
import actionsSecond from "@pictures/actions-2.png";
import actionsThird from "@pictures/actions-3.png";

import brandPetrus from "@pictures/brands/petrus.png";
import brandMarques from "@pictures/brands/marques.png";
import brandJacob from "@pictures/brands/jacob.png";

import previewEvents from "@pictures/events/events.png";

// @ts-ignore
import {Splide, SplideSlide} from "@splidejs/react-splide";
import cardExample from "@utils/card-example.ts";
import {About} from "@widgets/About";
import {EventCard} from "@shared/EventCard";

export function HomePage() {
    return (
        <>
            <section className={classnames(c.introduction, "wrap")}>
                <h1 className="text-neutral-0 fs-45 fw-700">
                    Коллекция изысканных алкогольных <br/> напитков со всего мира
                </h1>
                <p className="text-neutral-0 w-2% fs-16 fw-500 mt-[4.1875rem]">
                    В алкогольных бутиках Sabonis представлено уникальное собрание вин и крепких <br/> напитков из
                    России,
                    Европы и других регионов. В алкогольных бутиках Sabonis <br/> представлено уникальное собрание вин и
                    крепких напитков из России, Европы и <br/> других регионов.
                </p>
                <div className="flex gap-[1.25rem] mt-[15%]">
                    <article className="flex p-[0.8281rem] gap-[0.8125rem] [ bg-black/[.5] rounded-[5px]">
                        <div>
                            <SvgSprite type='earth-globe'/>
                        </div>
                        <span className="text-neutral-0 fw-400">3500 наименований вин, коньяков и других алкогольных напитков со всего мира</span>
                    </article>
                    <article className="flex p-[0.8281rem] gap-[0.8125rem] [ bg-black/[.5] rounded-[5px]">
                        <div>
                            <SvgSprite type='ru'/>
                        </div>
                        <span className="text-neutral-0 fw-400">Более 300 наименований российских уникальных и лимитированных российских вин</span>
                    </article>
                    <article className="flex p-[0.8281rem] gap-[0.8125rem] [ bg-black/[.5] rounded-[5px]">
                        <div>
                            <SvgSprite type='verified'/>
                        </div>
                        <span className="text-neutral-0 fw-400">1000 наименований премиального эксклюзивного и лимитированного импорта</span>
                    </article>
                    <article className="flex p-[0.8281rem] gap-[0.8125rem] [ bg-black/[.5] rounded-[5px]">
                        <div>
                            <SvgSprite type='pocket-knife'/>
                        </div>
                        <span className="text-neutral-0 fw-400">Все тихие и игристые вина вы можете выпить в любом из наших ресторанных залов без пробкового сбора!</span>
                    </article>
                </div>
            </section>
            <section className="wrap mt-[60px]">
                <h2 className="fs-40 fw-300 text-neutral-900">Рекомендованные товары</h2>
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
            <section className={classnames("wrap mt-[70px]", c.actions__wrapper)}>
                <article className={c["actions-item"]}
                         style={{background: `url("${actionsFirst}") no-repeat rgba(54, 118, 57, 0.85)`}}>
                    <h4 className="fs-55 fw-500 text-neutral-0">Акция <br/> месяца</h4>
                    <p className="fs-20 fw-500 text-neutral-0 mt-[56px]">Вино Домен Бастид <br/> Жордан "Вионье Фют"
                        IGP <br/> Медитерране</p>
                    <div className="mt-[20px]">
                        <span className="fs-30 fw-600 text-neutral-0 mr-[40px] line-through">20 000₽</span>
                        <span className="fs-40 fw-600 text-neutral-0">10 000₽</span>
                    </div>
                </article>
                <div className={c.actions__col}>
                    <article className={c["actions-item"]}
                             style={{background: `url("${actionsSecond}") no-repeat var(--color-peach)`}}>
                        <h4 className="fs-30 text-neutral-0 fw-500">Миниатюры и <br/> большие бутылки</h4>
                        <ul>
                            <li className="text-neutral-0 fs-15 fw-500">— Вино</li>
                            <li className="text-neutral-0 fs-15 fw-500">— Шампанское</li>
                            <li className="text-neutral-0 fs-15 fw-500">— Виски</li>
                            <li className="text-neutral-0 fs-15 fw-500">— Коньяк</li>
                        </ul>
                    </article>
                    <article className={c["actions-item"]}
                             style={{background: `url("${actionsThird}") no-repeat var(--color-primary)`}}>
                        <h4 className="fs-30 text-neutral-0 fw-500">Эксклюзивный <br/> импорт</h4>
                        <ul>
                            <li className="text-neutral-0 fs-15 fw-500">— Вино</li>
                            <li className="text-neutral-0 fs-15 fw-500">— Шампанское</li>
                            <li className="text-neutral-0 fs-15 fw-500">— Виски</li>
                            <li className="text-neutral-0 fs-15 fw-500">— Коньяк</li>
                        </ul>
                    </article>
                </div>
            </section>
            <section className="wrap mt-[60px]">
                <h2 className="fs-40 fw-300 text-neutral-900 mb-[72px]">Популярные бренды</h2>
                <Slider perPage={7} tags={[
                    {
                        title: "Виски",
                        id: 1
                    },
                    {
                        title: "Коньяк",
                        id: 2
                    },
                    {
                        title: "Виски",
                        id: 3
                    },
                    {
                        title: "Игристое вино",
                        id: 4
                    },
                    {
                        title: "Ром",
                        id: 5
                    },
                    {
                        title: "Джин",
                        id: 6
                    },
                ]}>
                    <img src={brandPetrus} alt="Brand"/>
                    <img src={brandJacob} alt="Brand"/>
                    <img src={brandMarques} alt="Brand"/>
                    <img src={brandJacob} alt="Brand"/>
                    <img src={brandPetrus} alt="Brand"/>
                    <img src={brandMarques} alt="Brand"/>
                    <img src={brandMarques} alt="Brand"/>
                    <img src={brandPetrus} alt="Brand"/>
                    <img src={brandJacob} alt="Brand"/>
                    <img src={brandMarques} alt="Brand"/>
                </Slider>
            </section>
            <About></About>
            <section className="wrap mt-[60px] mb-[84px]">
                <h2 className="fs-40 fw-300 text-neutral-900 mb-[40px]">Ближайшие мероприятия</h2>
                <Slider perPage={3}>
                    <EventCard></EventCard>
                    <EventCard></EventCard>
                    <EventCard></EventCard>
                </Slider>
            </section>
        </>
    );
}
