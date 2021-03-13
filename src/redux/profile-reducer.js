const ADD_POST='ADD-POST'
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE='SET-USER-PROFILE'

let initialState={
  postsData:[
      {userId: 1, message:'It is my First post', likes:13, comments:12},
      {userId: 2, message:'It is my second post',likes:14, comments:8},
      {userId: 3, message:'It is my third post',likes:25, comments:17}
  ],
  newPostText:'',
  profile:null
}

const profileReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_POST:{
            let newPost={
                userId:4,
                message:state.newPostText,
                /* message:state.newPostText, */
                likes:13, 
                comments:12
            }
            return {
              ...state,
              postsData:[...state.postsData,newPost],
              newPostText:''
            }
          }
        case UPDATE_NEW_POST_TEXT:{
            return{
              ...state,
              newPostText:action.newText
            }
        }
        case SET_USER_PROFILE:{
          return{
            ...state,
            profile:action.profile
          }
      }
        default:
            return state
    } 
}

export const addPostActionCreator=()=>{
    return{
      type:ADD_POST
    }
  }
  
export const updateNewPostTextActionCreator=(text)=>{
    return{
      type:UPDATE_NEW_POST_TEXT,newText:text
    }
  }

  export const setUserProfile=(profile)=>{
    return{
      type:SET_USER_PROFILE,profile
    }
  }

export default profileReducer