import React from "react";
import { usePages } from "../../../hooks/usePages";
import classes from './Pagination.module.css';

function Pagination({totalPages, page, changePage}) {

  let pagesArray  = usePages(totalPages);
  return (
    <div className={classes.page__wrapper}>
        {pagesArray.map(p =>
          <span onClick={() =>changePage(p)} key={p} className={p===page?[classes.page, classes.page__current].join(' '):classes.page}>{p}</span>
        )}
    </div>
  )
}
export default Pagination