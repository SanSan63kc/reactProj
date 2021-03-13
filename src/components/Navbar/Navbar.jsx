import React from 'react'
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom" 

const Navbar = ()=>{
    return(
      <nav className={classes.page__navbar}>
        <div className={classes.navbar__item}>
          <NavLink 
            className={classes.navbar__string} 
            activeClassName={classes.activeNav} 
            to="/profile">
            Моя страница
          </NavLink>
        </div>
        <div className={classes.navbar__item}>
          <NavLink 
            className={classes.navbar__string} 
            activeClassName={classes.activeNav} 
            to="/dialogs">
            Сообщения
          </NavLink>
        </div>
        <div className={classes.navbar__item}>
          <NavLink 
            className={classes.navbar__string} 
            activeClassName={classes.activeNav} 
            to="/frends">
            Друзья
          </NavLink>
        </div>
        <div className={classes.navbar__item}>
          <NavLink 
            className={classes.navbar__string} 
            activeClassName={classes.activeNav} 
            to="/news">
            Новости
          </NavLink>
        </div>
        <div className={classes.navbar__item}>
          <NavLink 
            className={classes.navbar__string} 
            activeClassName={classes.activeNav} 
            to="/music">
            Музыка
          </NavLink>
        </div>
        <div className={classes.navbar__item}>
          <NavLink
            className={classes.navbar__string} 
            activeClassName={classes.activeNav} 
            to="/settings">
            Настройки
          </NavLink>
        </div>
      </nav>
    )
}

export default Navbar;