import {Breadcrumbs} from "@shared/Breadcrumbs";
import {SvgSprite} from "@shared/SvgSprite";
import {FC, Fragment, useState} from "react";
import {ITag} from "@pages/CatalogPage/CatalogPage.types.ts";
import {Button} from "@shared/Button";
import uuid from "react-uuid";
import {CatalogGrid} from "@shared/CatalogGrid";
import {CatalogRow} from "@shared/CatalogRow";
import {CatalogFilter} from "@shared/CatalogFilter";
import cardExample from "@utils/card-example.ts";
import {Pagination} from "@shared/Pagination";
import {Slider} from "@widgets/Slider";
import {Card} from "@shared/Card";
import {About} from "@widgets/About";
// @ts-ignore
import {Splide, SplideSlide} from "@splidejs/react-splide";
import MediaQuery from "react-responsive";
import {Popover} from "react-tiny-popover";

export function CatalogPage() {
    const [typeView, setTypeView] = useState<"row" | "grid">("grid");
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    return (
        <>
            <section className="wrap mt-[30px]">
                <Breadcrumbs linksArray={[
                    {
                        title: "Главная",
                        link: "/"
                    },
                    {
                        title: "Каталог",
                        link: "/catalog"
                    },
                ]}></Breadcrumbs>
            </section>
            <section className="wrap mt-[30px]">
                <div className="flex items-center w-[100%] justify-between">
                    <h1 className="fs-30 fw-500 text-neutral-900">Вино Италии, регион Пьемонт</h1>
                    <MediaQuery query="(min-width: 1025px)">
                        <div className="flex items-center gap-[40px]">
                            <Popover isOpen={isPopoverOpen} content={<div className="w-[200px] h-[100px] bg-[var(--color-neutral-0)] mt-[5px] shadow rounded-[5px] p-[5px]">Popover</div>} positions="bottom">
                                <button className="flex items-center gap-[14px]" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                                    <SvgSprite type="sort"></SvgSprite>
                                    <span className="fs-15 fw-400 text-neutral-900">По размеру скидки</span>
                                    <SvgSprite type="arrow-vertical"></SvgSprite>
                                </button>
                            </Popover>
                            <div className="flex gap-[12px]">
                                <button onClick={() => setTypeView("grid")}>
                                    <SvgSprite
                                        type="grid"
                                        color={typeView === "grid" ? "var(--color-danger)" : "var(--color-neutral-900)"}
                                    ></SvgSprite>
                                </button>
                                <button onClick={() => setTypeView("row")}>
                                    <SvgSprite
                                        type="dashboard"
                                        color={typeView === "row" ? "var(--color-danger)" : "var(--color-neutral-900)"}
                                    ></SvgSprite>
                                </button>
                            </div>
                        </div>
                    </MediaQuery>
                </div>
                <MediaQuery query="(min-width: 1025px)">
                    <ul className="grid grid-cols-11 gap-[12px] mt-[30px]">
                        {
                            tagsItems.map(
                                tag =>
                                    <Fragment key={uuid()}>
                                        <li><Tag {...tag}></Tag></li>
                                    </Fragment>
                            )
                        }
                        <Button tiny className="p-[4px]" theme="secondary">
                            <span>Еще</span>
                            <SvgSprite type="arrow-vertical"></SvgSprite>
                        </Button>
                    </ul>
                </MediaQuery>
                <Splide className="w1024-min:hidden w1024:visible w1024:mt-[20px]" options={{
                    width: "100%",
                    gap: "10px",
                    pagination: false,
                    arrows: false,
                    breakpoints: {
                        1024: {perPage: 5},
                        468: {perPage: 3}
                    }
                }}>
                    {
                        tagsItems.map(
                            tag => <SplideSlide key={uuid()}><Tag {...tag} ></Tag></SplideSlide>
                        )
                    }
                </Splide>
            </section>
            <section className="w1024-min:wrap mt-[50px] grid gap-[30px] grid-cols-[23.53%_1fr] mb-[60px] w1024:grid-cols-1">
                <CatalogFilter></CatalogFilter>
                <div className="">
                    {
                        typeView === "grid" ?
                            <CatalogGrid catalogItems={Array(10).fill(cardExample)}></CatalogGrid> :
                            <CatalogRow catalogItems={Array(10).fill(cardExample)}></CatalogRow>
                    }
                    <div className="flex justify-center items-center mt-[30px]">
                        <Pagination></Pagination>
                    </div>
                </div>
            </section>
            <section className="wrap mt-[60px] grid gap-[30px] grid-cols-[23.53%_1fr] w1024:block mb-[60px]">
                <MediaQuery query="(min-width: 1025px)">
                    <div>
                        <h3 className="fs-30 fw-600 text-neutral-900">Популярное:</h3>
                        <div className="w-[100%] flex items-center flex-wrap gap-[10px]">
                            {
                                [
                                    {
                                        title: "Вино Бургундское"
                                    },
                                    {
                                        title: "Мерло до 2000"
                                    },
                                    {
                                        title: "Новозеландский Совиньон Блан"
                                    },
                                    {
                                        title: "Бароло"
                                    },
                                    {
                                        title: "Шардоне"
                                    },
                                    {
                                        title: "Сира"
                                    },
                                    {
                                        title: "Красное сухое вино"
                                    },
                                    {
                                        title: "Барбареско"
                                    }
                                ].map(
                                    el => <button key={uuid()}
                                                  className="py-[4px] px-[12px] fs-13 fw-400 text-neutral-900 rounded-[5px] border-solid border-[1px] border-[#C7C7C7] ">{el.title}</button>
                                )
                            }
                        </div>
                    </div>
                </MediaQuery>
                <div>
                    <h3 className="fs-30 fw-600 text-neutral-900">Вино итальянское, регион Пьемонт</h3>
                    <p className="mt-[30px]">
                        Пьемонт – это регион на северо-западе Италии, который славится своими плодородными землями и
                        благоприятным климатом для выращивания винограда. Он является одним из главных центров
                        итальянского виноделия и предлагает множество уникальных вин, отражающих традиции и историю
                        этого региона. В данной статье мы познакомим вас с лучшими винами Пьемонта и расскажем об их
                        особенностях.
                    </p>
                    <p className="mt-[16px]">
                        1. Бароло br
                        Бароло – одно из самых известных вин Пьемонта и Италии в целом. Это красное сухое вино с
                        насыщенным вкусом и ароматом, которое производят из винограда сорта Неббиоло. Вино обладает
                        глубоким рубиновым цветом и сложным ароматом, включающим ноты вишни, ежевики, ванили и специй.
                        Бароло выдерживается в дубовых бочках не менее трех лет, что придает ему дополнительную
                        сложность и элегантность.
                    </p>
                    <p className="mt-[16px]"> 1. Барбареско <br/>
                        Барбареско – еще одно красное сухое вино из Пьемонта, изготовленное из винограда Неббиоло, но со
                        своим уникальным стилем. Это вино обладает более легким телом и менее интенсивным ароматом по
                        сравнению с Бароло, а также чуть более низким содержанием алкоголя.
                    </p>
                    <a href="#">Подробнее...</a>
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
            <About></About>
        </>
    );
}


const Tag: FC<ITag> = ({title}) => {
    const [active, setActive] = useState<boolean>(false);
    return <Button
        tiny={true}
        className="p-[4px]"
        theme={active ? "fill" : "secondary"}
        onClick={() => setActive(!active)}
    >{title}</Button>;
}


const tagsItems: ITag[] = Array(21).fill({
    title: "Красное",
    id: 1
})