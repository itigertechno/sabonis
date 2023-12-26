import { ICatalogGrid } from './CatalogGrid.types';
import c from "./style.module.css";
import classnames from "@utils/classnames.ts";
import {Card} from "@shared/Card";
import uuid from "react-uuid";

export function CatalogGrid({catalogItems}: ICatalogGrid) {
  return (
      <div className={classnames(c.wrapper, "w-[100%] grid grid-cols-3 w1024:grid-cols-3 w768:!grid-cols-2")}>
        {
          catalogItems.map(
              el => <Card key={uuid()} mosaic={true} {...el}></Card>
          )
        }
      </div>
  );
}
