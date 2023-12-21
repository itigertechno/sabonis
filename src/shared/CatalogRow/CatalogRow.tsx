import { ICatalogRow } from './CatalogRow.types';
import classnames from "@utils/classnames.ts";
import c from "@shared/CatalogGrid/style.module.css";
import {InlineCard} from "@shared/InlineCard";

export function CatalogRow({catalogItems}: ICatalogRow) {
  return (
      <div className={classnames(c.wrapper, "w-[100%] grid grid-cols-1")}>
        {
          catalogItems.map(
              el => <InlineCard {...el}></InlineCard>
          )
        }
      </div>
  );
}
