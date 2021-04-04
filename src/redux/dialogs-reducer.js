const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState={
  dialogsData:[
      {id: 1, name:'First User', avatar:"http://placehold.it/30"},
      {id: 2, name:'Second User', avatar:"http://placehold.it/30"},
      {id: 3, name:'Third User', avatar:"http://placehold.it/30"}
  ],
  messagesData:[
      {userId: 1, message:'First Message'},
      {userId: 2, message:'Second Message'},
      {userId: 3, message:'Third Message'}
  ]
} 

const dialogsReducer=(state=initialState,action)=>{

    switch (action.type){
        case SEND_MESSAGE:{
          let body = action.newMessageBody
          return{
            ...state,
            messagesData:[...state.messagesData,{userId: 7, message:body}]
          }
        }        
        default:
            return state
    }
}

export const sendMessageCreator=(newMessageBody)=>{
    return{
      type:SEND_MESSAGE, newMessageBody
    }
  }

export default dialogsReducer