import { ICatalogGrid } from './CatalogGrid.types';
import c from "./style.module.css";
import classnames from "@utils/classnames.ts";
import {Card} from "@shared/Card";
import uuid from "react-uuid";
import event from "@pictures/catalog/event.png";

export function CatalogGrid({catalogItems}: ICatalogGrid) {
  return (
      <div className={classnames(c.wrapper, "w-[100%] grid grid-cols-3 w1024:grid-cols-3 w768:!grid-cols-2")}>
        {
          catalogItems.map(
              (el, index) => {
                  if (index === 4) {
                      return (
                          <>
                              <img src={event} alt="Preview event" className="object-center object-contain w-full max-h-[430px] rounded-[5px]" width="100%" height="100%"/>
                              <Card key={uuid()} mosaic={true} {...el}></Card>
                          </>
                      )
                  }
                  return <Card key={uuid()} mosaic={true} {...el}></Card>
              }
          )
        }
      </div>
  );
}
