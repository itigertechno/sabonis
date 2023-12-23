import {IEventCard} from './EventCard.types';
import previewEvents from "@pictures/events/events.png";
import {Button} from "@shared/Button";

export function EventCard({hasButton = true}: IEventCard) {
    return (
        <article className="flex flex-col" style={{height: "100%"}}>
            <img className="w-[100%] rounded-[5px]" src={previewEvents} alt="Preview events"/>
            <span className="fs-15 fw-500 text-neutral-900 mt-[20px] block">20.12.2023, 18:00</span>
            <h4 className="fs-18 fw-600 text-neutral-900 mt-[20px]">Сет российских вин</h4>
            <p className="mt-auto fs-15 fw-400 text-neutral-900 mb-[40px]">
                Друзья, с приходом осени в Зале Русского Виноделия запускаются винные сеты, посвященные
                российским хозяйствам.
            </p>
            {
                hasButton ?
                    <>
                        <Button className="mt-auto" theme="transparent">
                            Читать еще
                        </Button>
                    </> : ""
            }
        </article>
    );
}
