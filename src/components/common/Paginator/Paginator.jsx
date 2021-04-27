import React, { useState } from 'react'
import classes from "./Paginator.module.css";

let Paginator =({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize=10})=>{
    
    let pagesCount=Math.ceil(totalUsersCount/pageSize)

    let pages=[]

    for (let i=1; i<=pagesCount; i++){
      pages.push(i)
    }

    let portionCount=Math.ceil(pagesCount/portionSize)
    let{portionNumber, setPortionNumber}=useState(1)
    let leftPortionPageNumber=(portionNumber-1)*portionSize+1
    let rightPortionNumber=portionNumber*portionSize
    
    return <div>
    <div className={classes.frendsPage}>
      {portionNumber>1 &&
      <button onClick={()=>{setPortionNumber(portionNumber-1)}}>PREV</button>}
        <div className={classes.usersList}>
            <div>
                {pages
                .filter(p=>p>=leftPortionPageNumber && p<rightPortionNumber)
                .map(p=>{
                return <span className={currentPage===p && classes.selectedPage}
                         key={p} onClick={(e)=>{onPageChanged(p)}}>{p}</span>
                         })}       
            </div>
            {portionCount>portionNumber &&
            <button onClick={()=>{setPortionNumber(portionNumber+1)}}>Next</button>}
        </div>
    </div>
  </div>
}

export default Paginator