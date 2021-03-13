import React from 'react'
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom"

const DialogUserLink=(props)=>{

  let urlPath="/dialogs/"+props.userId
  
  return(
    <NavLink className={classes.user__link} to={urlPath} >
      <div className={classes.user__item}>
        <div className={classes.user__avatar}>
          <img src={props.userAvatar} alt=""/>
        </div>
        <div className={classes.user__name}>
            {props.name}    
        </div>
      </div> 
    </NavLink>
  )
}

export default DialogUserLink;