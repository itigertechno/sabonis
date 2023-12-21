import { ICatalogGrid } from './CatalogGrid.types';
import c from "./style.module.css";
import classnames from "@utils/classnames.ts";
import {Card} from "@shared/Card";

export function CatalogGrid({catalogItems}: ICatalogGrid) {
  return (
      <div className={classnames(c.wrapper, "w-[100%] grid grid-cols-3")}>
        {
          catalogItems.map(
              el => <Card {...el}></Card>
          )
        }
      </div>
  );
}
