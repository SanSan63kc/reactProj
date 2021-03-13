import React from 'react'
import classes from './Post.module.css'

let myAva = 'https://scontent-arn2-1.cdninstagram.com/v/t51.2885-15/e35/67585491_374854409894931_5025627006207279517_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=w6L76-RtuAwAX-swHhY&tp=1&oh=329be9843f117672f425d6ca6ce3d154&oe=60220630'

const Post = (props)=>{
    return(
            <div className={classes.post__content}>
              <div className={classes.post__title}>
                <img className={classes.post__avatar} src={myAva} href="#" alt=""/>
                <div className={classes.post__text}>
                  {props.message}
                </div>
              </div>
              
              <div className={classes.post__footer}>
                <div className={classes.likes__block}>
                  <i className="far fa-heart"></i>
                  <div className={classes.likescount}>
                    {props.likes}
                  </div>
                </div>
                <div className={classes.comments__block}>
                  <i className="far fa-comment"></i>
                  <div className={classes.commentscount}>
                    {props.comment}
                  </div>
                </div>
              </div>
            </div>
        )
}

export default Post;