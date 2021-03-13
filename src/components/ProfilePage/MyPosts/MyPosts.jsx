import classes from './MyPosts.module.css';
import React from 'react'
import Post from './Post/Post';

const MyPosts = (props)=>{

  let postElements=props.posts.map(
    pd=><Post message={pd.message} likes={pd.likes} comment={pd.comments}/>
  )

    let newPostElement = React.createRef();
    
    let onAddPost= ()=>{
      props.addPost()  
    }

    let onPostChange=()=>{
      let text = newPostElement.current.value
      props.updateNewPostText(text)
    }

    return(
        <div>
          My posts
          <div>     
            <div className={classes.createPost}>
              <textarea  
                ref={newPostElement} 
                onChange={onPostChange} 
                className={classes.createPost__input} 
                type="text" name="name" 
                placeholder="Напишите что-нибудь..." 
                value={props.newPostText}>
              </textarea>
              <button 
                className={classes.createPost__btn} 
                onClick={onAddPost} 
                type="button">Отправить</button>
            </div>  
          </div>
          
          <div>
            {postElements}
          </div>
        </div>

    )
}

export default MyPosts;