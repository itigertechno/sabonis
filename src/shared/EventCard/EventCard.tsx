import {IEventCard} from './EventCard.types';
import previewEvents from "@pictures/events/events.png";
import {Button} from "@shared/Button";
import {Link} from "react-router-dom";
import classnames from "@utils/classnames.ts";

export function EventCard({hasButton = true}: IEventCard) {
    return (
        <article className="flex flex-col" style={{height: "100%"}}>
            {
                !hasButton ? <h4 className="fs-18 fw-600 text-neutral-900 mt-[20px]">Сет российских вин</h4> : <></>
            }
            <img className={classnames(hasButton ? "w-[100%] rounded-[5px]" : "w-[100%] rounded-[5px] mt-[10px]")} src={previewEvents} alt="Preview events"/>
            {
                hasButton ?
                    <>
                        <span className="fs-15 fw-500 text-neutral-900 mt-[20px] block">20.12.2023, 18:00</span>
                        <h4 className="fs-18 fw-600 text-neutral-900 mt-[20px]">Сет российских вин</h4>
                    </> : <></>
            }
            <p className={classnames(hasButton ? "mt-auto fs-15 fw-400 text-neutral-900 mb-[40px]" : "fs-15 fw-400 text-neutral-900 mt-[25px]")}>
                Друзья, с приходом осени в Зале Русского Виноделия запускаются винные сеты, посвященные
                российским хозяйствам.
            </p>
            {
                hasButton ?
                    <>
                        <Link to="/event">
                            <Button className="mt-auto" theme="transparent">
                                Читать еще
                            </Button>
                        </Link>
                    </> :
                    <>
                        <Link to="/event" className="fs-15 underline underline-offset-[2px]">Подробнее...</Link>
                    </>
            }
        </article>
    );
}
