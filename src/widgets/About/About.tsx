import classnames from "@utils/classnames.ts";
import c from "@pages/HomePage/style.module.css";
// @ts-ignore
import {Splide, SplideSlide} from "@splidejs/react-splide";
import previewProject from "@pictures/about/project.png";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "@shared/Button";
import previewSabonis from "@pictures/about/sabonis.png";

export function About() {
    const navigate = useNavigate();
    return (
        <section className={classnames("wrap mt-[70px] grid gap-[80px] grid-cols-2", c.about)}>
            <article className="flex flex-col">
                <h4 className="fs-40 fw-300 text-neutral-900 mb-[57px]">О проекте Wine&Dine</h4>
                <Splide className="rounded-[5px]">
                    <SplideSlide><img className="w-[100%]" src={previewProject} alt="About Sabonis"/></SplideSlide>
                    <SplideSlide><img className="w-[100%]" src={previewProject} alt="About Sabonis"/></SplideSlide>
                    <SplideSlide><img className="w-[100%]" src={previewProject} alt="About Sabonis"/></SplideSlide>
                    <SplideSlide><img className="w-[100%]" src={previewProject} alt="About Sabonis"/></SplideSlide>
                    <SplideSlide><img className="w-[100%]" src={previewProject} alt="About Sabonis"/></SplideSlide>
                </Splide>
                <p className="fs-15 fw-500 text-neutral-900 mt-[35px]">
                    Wine&Dine - крупнейший винный проект Петербурга. Коллаборация винотеки и бара-ресторана. Винная
                    карта 2500 наименований по цене винотеки, без пробкового сбора!
                </p>
                <br/>
                <p className="fs-15 fw-500 text-neutral-900 mb-[20px]">
                    Wine&Dine одна из главных дегустационных площадок города, где регулярно проходят винные ужины и
                    дегустации вин от частных хозяйств до ведущих представителей винной индустрии.
                </p>
                <Link to="https://wineanddine.group" className="w-fit mt-auto">
                    <Button
                        theme="transparent"
                    >
                        Подробнее на https://wineanddine.group
                    </Button>
                </Link>
            </article>
            <article className="flex flex-col">
                <h4 className="fs-40 fw-300 text-neutral-900 mb-[57px]">О бутике Сабонис</h4>
                <Splide>
                    <SplideSlide><img className="w-[100%]" src={previewSabonis} alt="About Sabonis"/></SplideSlide>
                    <SplideSlide><img className="w-[100%]" src={previewSabonis} alt="About Sabonis"/></SplideSlide>
                    <SplideSlide><img className="w-[100%]" src={previewSabonis} alt="About Sabonis"/></SplideSlide>
                    <SplideSlide><img className="w-[100%]" src={previewSabonis} alt="About Sabonis"/></SplideSlide>
                    <SplideSlide><img className="w-[100%]" src={previewSabonis} alt="About Sabonis"/></SplideSlide>
                </Splide>
                <p className="fs-15 fw-500 text-neutral-900 mt-[35px] mb-[20px]">
                    Sabonis — алкогольный бутик и винотека, сердце проекта Wine&Dine. Особую ценность представляет
                    коллекция российских вин, который отведен отдельный зал, где представлено более 300 уникальных и
                    лимитированных наименований. Sabonis — алкогольный бутик и винотека, сердце проекта Wine&Dine.
                    Особую ценность представляет коллекция российских вин, который отведен отдельный зал, где
                    представлено более 300 уникальных и лимитированных наименований.
                </p>
                <div className="mt-auto w-[50%]">
                    <Button onClick={() => navigate("/catalog")}>
                        Перейти в каталог
                    </Button>
                </div>
            </article>
        </section>
    );
}
