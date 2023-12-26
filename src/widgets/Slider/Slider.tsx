// @ts-ignore
import {Splide, SplideProps, SplideTrack, SplideSlide} from "@splidejs/react-splide";
import classnames from "@utils/classnames.ts";
import c from "./style.module.css";
import {Children, Fragment, PropsWithChildren, useState} from "react";
import {ISlider} from "./Slider.types.ts";
import uuid from "react-uuid";
import {SvgSprite} from "@shared/SvgSprite";

export function Slider({children, perPage, mobilePerPage, tags = []}: PropsWithChildren<ISlider>) {
    const [active] = useState<number>(tags[0] && tags[0].id ? tags[0].id : 1);
    const options = {
        type: "loop",
        gap: "1rem",
        arrows: true,
        perPage: perPage,
        pagination: false,
        arrowPath: "",
        classes: {
            pagination: classnames("splide__pagination", c.pagination),
            page: classnames("splide__pagination__page", c.pagination__page),

            arrows: classnames("splide__arrows", c.arrows),
            arrow: classnames("splide__arrow", c.arrow),
            prev: classnames("splide__arrow--prev", c["arrow--prev"]),
            next: classnames("splide__arrow--prev", c["arrow--next"])

        },
        breakpoints: {
            1024: {
                perPage: mobilePerPage ? mobilePerPage : 2
            },
            768: {
                perPage: mobilePerPage ? mobilePerPage : 1
            },
        }
    }
    return (
        <div className="relative">
            <ul className="flex gap-[30px] mb-[40px] w1024-min:hidden w1024:visible">
                <SubTrack active={active} tags={tags}></SubTrack>
            </ul>
            <Splide options={options} hasTrack={false}>
                <ul className="flex gap-[30px] mb-[40px] w1024:hidden">
                    {
                        tags.map((el =>
                            <li key={uuid()}>
                                <button
                                    className={classnames("fs-20 fw-500", (el.id === active ? "text-neutral-900" : "underline underline-offset-4 text-neutral-500"))}>{el.title}</button>
                            </li>)
                        )
                    }
                </ul>
                <div className={classnames("splide__arrows w1024:!hidden", c.arrows)}>
                    <button className={classnames("splide__arrow splide__arrow--prev", c.arrow, c["arrow--prev"])}>
                        <SvgSprite type="slider-arrow" className="scale-x-[-1]"></SvgSprite>
                    </button>
                    <button className={classnames("splide__arrow splide__arrow--next", c.arrow, c["arrow--next"])}>
                        <SvgSprite type="slider-arrow"></SvgSprite>
                    </button>
                </div>
                <SplideTrack>
                    {
                        Children.map(children, (el) =>
                            <Fragment key={uuid()}>
                                <SplideSlide>{el}</SplideSlide>
                            </Fragment>
                        )
                    }
                </SplideTrack>
            </Splide>
        </div>
    );
}

const SubTrack = ({ tags, active }: {active: number, tags: {title: string, id: number}[]}) => (
    <Splide options={{
        arrows: false,
        pagination: false,
        perPage: 2,
        width: "100%",
        fixedWidth: "fit-content(100%)",
        gap: "1rem"

    }} hasTrack={false}>
        <SplideTrack>
            {
                tags.map((el =>
                    <SplideSlide key={uuid()}>
                        <li>
                            <button
                                className={classnames("fs-20 fw-500 whitespace-nowrap", (el.id === active ? "text-neutral-900" : "underline underline-offset-4 text-neutral-500"))}>{el.title}</button>
                        </li>
                    </SplideSlide>)
                )
            }
        </SplideTrack>
    </Splide>
)