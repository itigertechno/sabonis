import {Breadcrumbs} from "@shared/Breadcrumbs";
import {EventCard} from "@shared/EventCard";
import {Pagination} from "@shared/Pagination";

export function EventsPage() {
    return (
        <>
            <section className="wrap mt-[30px]">
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
                <h1 className="mt-[30px] fs-30 fw-500 text-neutral-900">Мероприятия</h1>
                <div className="grid grid-cols-3 gap-y-[50px] gap-x-[40px] mt-[50px] w768:grid-cols-2 w468:!grid-cols-1">
                    <EventCard></EventCard>
                    <EventCard></EventCard>
                    <EventCard></EventCard>
                    <EventCard></EventCard>
                    <EventCard></EventCard>
                    <EventCard></EventCard>
                </div>
                <div className="w-[100%] flex items-center justify-center my-[50px]">
                    <Pagination></Pagination>
                </div>
            </section>
        </>
    );
}
