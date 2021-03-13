import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = (props)=>{
    return(
        <div className={classes.app__header}>
          <img src="http://www.kc-camapa.ru/img/logo/0.png" alt=""/>
          <div className={classes.header__text}>
            Тестовая соц сеть by Саша Александрович
          </div>
          <div className={classes.login__block}>
            {props.isAuth?props.login:<NavLink to={'/login'}>Login</NavLink>}
            
          </div>
      </div>
    )
}

export default Header;