import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

let store={
    _state:{
        profilePage:{
            postsData:[
                {userId: 1, message:'It is my First post', likes:13, comments:12},
                {userId: 2, message:'It is my second post',likes:14, comments:8},
                {userId: 3, message:'It is my third post',likes:25, comments:17}
            ],
            newPostText:''
        },
        dialogsPage:{
            dialogsData:[
                {id: 1, name:'First User', avatar:"http://placehold.it/30"},
                {id: 2, name:'Second User', avatar:"http://placehold.it/30"},
                {id: 3, name:'Third User', avatar:"http://placehold.it/30"}
            ],
            messagesData:[
                {userId: 1, message:'First Message'},
                {userId: 2, message:'Second Message'},
                {userId: 3, message:'Third Message'}
            ],
            newMessageBody:''
        }    
    },
    _callSubscriber(){
        console.log('State was changed')
    },

    getState(){
        return this._state
    },
    subscribe(observer){
        this._callSubscriber=observer
    },
    
    dispatch(action){

        this._state.profilePage=profileReducer(this._state.profilePage,action)
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action)

        this._callSubscriber(this._state)     
    }
}


export default store

window.store=store