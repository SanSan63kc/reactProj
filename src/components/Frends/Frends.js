import React from 'react'
import classes from "./Frends.module.css";
import {NavLink} from "react-router-dom"

let Frends =(props)=>{
    
    let pagesCount=Math.ceil(props.totalUsersCount/props.pageSize)

    let pages=[]

    for (let i=1; i<=pagesCount; i++){
      pages.push(i)
    }
    
    return <div>
    <div className={classes.frendsPage}>
                <div className={classes.usersList}>
                <div>
                    {pages.map(p=>{
                        return <span className={props.currentPage===p && classes.selectedPage}
                                    onClick={(e)=>{props.onPageChanged(p)}}>{p}</span>})}
                </div>
                {props.users.map((u) => (
                    <div className={classes.userCard} key={u.id}>
                    <div className={classes.userAvatar}>
                        <NavLink to={'/profile/'+u.id}>
                            <img className={classes.userAvatarPhoto} src={u.photos.small !=null ? u.photos.small:"https://vk.com/images/camera_200.png" } />  {/* src={u.photoUrl} //-  так в моём json лежит */} {/* src={u.photos.small !=null ? u.photos.small:"https://vk.com/images/camera_200.png" } */}
                        </NavLink>
                    </div>
                    <div className={classes.userInfo__block}>
                        <div className={classes.fullName}>{u.name}</div>{/* в моём json лежит u.fullName */}
                        <div className={classes.workedIn__text}>{u.workedIn}</div>
                        <div className={classes.locationName}>
                        {"u.location.country + ", " + u.location.city"}
                        </div>
                    </div>
                    <div className={classes.follow__block}>
                        {u.followed ? (
                        <button disabled={props.followingInProgress.some(id=>id===u.id)} 
                                className={classes.follow__btn} 
                                onClick={() => {props.unfollow(u.id)}} >Подписан
                        </button>
                        ) : (
                        <button disabled={props.followingInProgress.some(id=>id===u.id)} 
                                className={classes.follow__btn} 
                                onClick={() => {props.follow(u.id)}} >Отписан
                        </button>
                        )}
                    </div>
                    </div>
                ))}
                </div>
                <div className={classes.rightPanel}>
                <div className={classes.firstPanel}>Там, где куча всяких параметров по поиску друзей</div>
                <div className={classes.secondPanel}>Там, где возможные друзья</div>
                </div>
  </div>
  </div>
}

export default Frends