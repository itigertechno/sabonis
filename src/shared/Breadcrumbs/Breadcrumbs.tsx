import {Link} from 'react-router-dom';
import {IBreadcrumbs} from './Breadcrumbs.types.ts';
import c from "./style.module.css";
import classnames from "@utils/classnames.ts";
import {Fragment} from "react";
import uuid from "react-uuid";

export function Breadcrumbs({linksArray}: IBreadcrumbs) {
    return (
        <ul className={c.list}>
            {
                linksArray.map(({link, title}) =>
                    <Fragment key={uuid()}>
                        <li className={classnames(c.item, "fs-15 fw-300 text-neutral-900")}>
                            <Link to={link}>{title}</Link>
                        </li>
                    </Fragment>)
            }
        </ul>
    );
}
