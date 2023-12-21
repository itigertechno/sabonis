import { IPagination } from './Pagination.types';
import ReactPaginate from "react-paginate";
import {SvgSprite} from "@shared/SvgSprite";

export function Pagination({}: IPagination) {
  return (
      <>
          <ReactPaginate
              breakLabel="..."
              nextLabel={<SvgSprite type="slider-arrow"/>}
              previousLabel={<SvgSprite type="slider-arrow" className="rotate-180"/>}
              onPageChange={() => null}
              pageRangeDisplayed={3}
              pageCount={100}
              renderOnZeroPageCount={null}
              className="flex gap-[10px] items-center"
              activeClassName="text-primary fw-600"
              pageClassName="fs-15 fw-500 text-neutral-900"
          />
      </>
  );
}