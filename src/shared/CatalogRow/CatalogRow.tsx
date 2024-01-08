import { ICatalogRow } from './CatalogRow.types';
import classnames from "@utils/classnames.ts";
import c from "@shared/CatalogGrid/style.module.css";
import {InlineCard} from "@shared/InlineCard";
import {Button} from "@shared/Button";

export function CatalogRow({catalogItems}: ICatalogRow) {
  return (
      <>
          <div className="flex justify-between items-center border-[1px] border-[#DFDFDF] bg-[#F4F4F4] py-[1.5rem] px-[1rem] rounded">
              <button className="flex items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline mr-[10px]">
                      <rect x="21" y="3" width="18" height="18" rx="1" transform="rotate(90 21 3)" stroke="#494949" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="fs-15 text-neutral-900">Выбрать все</span>
              </button>
              <Button className="!w-fit">
                  В корзину (1)
              </Button>
          </div>
          <div className={classnames(c.wrapper, "w-[100%] grid grid-cols-1")}>
              {
                  catalogItems.map(
                      el => <InlineCard {...el}></InlineCard>
                  )
              }
          </div>
      </>
  );
}
