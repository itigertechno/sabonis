import { IDropList } from './DropList.types';
import {FC, PropsWithChildren, SVGProps, useState} from "react";
import classnames from "@utils/classnames.ts";
import c from "@shared/CatalogFilter/style.module.css";
const DropList: FC<PropsWithChildren<IDropList>> = ({children, title, bold, className = ""}) => {
  const [active, setActive] = useState<boolean>(false);

  return (
      <div className={classnames(c.droplist, className, bold ? "!border-[var(--color-neutral-900)]" : "")}>
        <button className="w-[100%] flex items-center justify-between" onClick={() => {
          setActive(!active)
        }}>
          <span className={bold ? "fw-700 fs-15" : ""}>{title}</span>
          <Arrow type="arrow-vertical" className={active ? "" : "rotate-180"}></Arrow>
        </button>
        <div className={active ? "flex items-center gap-[6px] mt-[10px]" : "hidden"}>
          {
            children
          }
        </div>
      </div>
  )
}
const Arrow: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.28 17.4L14.5 11.02L19.72 17.4" stroke="#494949" strokeWidth="1.2"/>
    </svg>
)

export default DropList;