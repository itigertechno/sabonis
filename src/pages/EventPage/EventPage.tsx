import {Breadcrumbs} from "@shared/Breadcrumbs";
import {EventCard} from "@shared/EventCard";
import ex from "@pictures/events/ex.png";
import {Button} from "@shared/Button";
import MediaQuery from "react-responsive";
import {Slider} from "@widgets/Slider";
import {Link} from "react-router-dom";

export function EventPage() {
    return (
        <>
            <section className="wrap my-[30px]">
                <Breadcrumbs linksArray={[
                    {
                        title: "Главная",
                        link: "/"
                    },
                    {
                        title: "Мероприятия",
                        link: "/events"
                    }
                ]}></Breadcrumbs>
                <div className="grid grid-cols-[1fr_25%] gap-[40px] w1024:grid-cols-1">
                    <div>
                        <h1 className="mt-[30px] fs-30 fw-500 text-neutral-900">
                            Дегустация “Рождественский гайд:
                            десертные и крепленые вина”
                        </h1>
                        <div className="flex gap-[40px] mt-[30px] w1024:block">
                            <img src={ex} alt="Preview of event" className="w1024:mb-[30px]"/>
                            <div>
                                <p className="fs-15 fw-400 text-neutral-900">
                                    Семейный уют, теплые разговоры, ароматы домашней выпечки и согревающие напитки на
                                    фоне легкого снегопада — именно так мы представляем идеальное Рождество. Главное —
                                    правильно подобрать напитки, а с этим мы готовы помочь.
                                </p>
                                <p className="fs-15 fw-400 text-neutral-900 mt-[20px]">
                                    Наш рождественский гайд поможет разобраться в многообразии крепленых и десертных вин
                                    из разных стран: выясним, в чем их отличие и особенность, как их производят в
                                    традиционных регионах, и на что обращать внимание в первую очередь при выборе
                                    дижестива.
                                </p>
                                <p className="fs-15 fw-400 text-neutral-900 mt-[20px]">
                                    Вечер проведет сомелье Wine&Dine — Владимир Гриб.
                                </p>
                            </div>
                        </div>
                        <div className="mt-[32px]">
                            <h2 className="fs-20 fw-500 text-neutral-900">Рождественский сет:</h2>
                            <p className="fs-15 fw-500 text-neutral-400 mt-[20px] w-[75%] italic">
                                <b>Испания</b> | Valdespino «Inocente» Fino
                                Классический сухой херес из сорта Паломино Фино, собранного с одного виноградника и
                                выдержанного в американском дубе до 8 лет под пленкой хересных дрожжей.
                            </p>
                            <p className="fs-15 fw-500 text-neutral-400 mt-[20px] w-[75%] italic">
                                <b>Испания</b> | Valdespino «Inocente» Fino
                                Классический сухой херес из сорта Паломино Фино, собранного с одного виноградника и
                                выдержанного в американском дубе до 8 лет под пленкой хересных дрожжей.
                            </p>
                            <p className="fs-15 fw-500 text-neutral-400 mt-[20px] w-[75%] italic">
                                <b>Испания</b> | Valdespino «Inocente» Fino
                                Классический сухой херес из сорта Паломино Фино, собранного с одного виноградника и
                                выдержанного в американском дубе до 8 лет под пленкой хересных дрожжей.
                            </p>
                            <p className="fs-15 fw-500 text-neutral-400 mt-[20px] w-[75%] italic">
                                <b>Испания</b> | Valdespino «Inocente» Fino
                                Классический сухой херес из сорта Паломино Фино, собранного с одного виноградника и
                                выдержанного в американском дубе до 8 лет под пленкой хересных дрожжей.
                            </p>
                            <p className="fs-15 fw-500 text-neutral-400 mt-[20px] w-[75%] italic">
                                <b>Испания</b> | Valdespino «Inocente» Fino
                                Классический сухой херес из сорта Паломино Фино, собранного с одного виноградника и
                                выдержанного в американском дубе до 8 лет под пленкой хересных дрожжей.
                            </p>
                            <p className="fs-15 fw-500 text-neutral-400 mt-[20px] w-[75%] italic">
                                <b>Испания</b> | Valdespino «Inocente» Fino
                                Классический сухой херес из сорта Паломино Фино, собранного с одного виноградника и
                                выдержанного в американском дубе до 8 лет под пленкой хересных дрожжей.
                            </p>
                        </div>
                        <div className="w-fit mt-[30px]">
                            <Button>
                                <span className="px-[30px] text-neutral-0 block">Купить билет</span>
                            </Button>
                        </div>
                    </div>
                    <div className="border-[#D6D7D9] border-x-[1px] rounded-[5px] w1024:hidden">
                        <div
                            className="py-[5px] bg-[var(--color-primary)] border-[var(--color-primary) rounded-[5px_5px_0_0]">
                            <span className="fs-15 uppercase text-neutral-0 text-center leading-[50px] w-[100%] block">ближайшие мероприятия</span>
                        </div>
                        <div className="flex flex-col gap-[10px] p-[12px] mt-[30px]">
                            <EventCard hasButton={false}></EventCard>
                            <EventCard hasButton={false}></EventCard>
                            <EventCard hasButton={false}></EventCard>
                            <Link to="/events">
                                <Button className="mt-[30px]">Все мероприятия</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <MediaQuery query="(max-width:1024px)">
                    <Slider perPage={3}>
                        <EventCard></EventCard>
                        <EventCard></EventCard>
                        <EventCard></EventCard>
                    </Slider>
                </MediaQuery>
            </section>
        </>
    );
}
