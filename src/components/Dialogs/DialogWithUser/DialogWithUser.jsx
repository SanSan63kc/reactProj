import React from 'react'
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom"


const DialogWithUser=(props)=>{
  return(
    <div className={classes.dialog__item}>
      <div className={classes.dialog__text}>{props.message}</div>
    </div>
  )
}

export default DialogWithUser;