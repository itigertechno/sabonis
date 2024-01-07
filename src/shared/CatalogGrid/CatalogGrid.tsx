import {ICatalogGrid} from './CatalogGrid.types';
import c from "./style.module.css";
import classnames from "@utils/classnames.ts";
import {Card} from "@shared/Card";
import uuid from "react-uuid";
import event from "@pictures/catalog/event.png";

export function CatalogGrid({catalogItems}: ICatalogGrid) {
    return (
        <ul className={classnames(c.wrapper, "w-[100%] grid grid-cols-3 gap-[1.5rem] w1024:gap-0 w1024:grid-cols-3 w768:!grid-cols-2")}>
            {
                catalogItems.map(
                    (el, index) => {
                        if (index === 4) {
                            return (
                                <>
                                    <li className={c.item}>
                                        <img src={event} alt="Preview event"
                                             className="object-center object-contain w-full max-h-[430px] rounded-[5px] w1024:rounded-none w1024:object-cover"
                                             width="100%" height="100%"/>
                                    </li>
                                    <li className={c.item}>
                                        <Card key={uuid()} mosaic={true} {...el}></Card>
                                    </li>
                                </>
                            )
                        }
                        return <li className={c.item}><Card key={uuid()} mosaic={true} {...el}></Card></li>
                    }
                )
            }
        </ul>
    );
}
