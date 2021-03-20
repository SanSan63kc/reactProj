import React from 'react'
import {updateNewMessageBodyCreator,sendMessageCreator} from "../../redux/dialogs-reducer"
import Dialogs from './Dialogs'
import {connect} from "react-redux"
import { Redirect } from 'react-router'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

let mapStateToProps=(state)=>{
  return{
    dialogsPage:state.dialogsPage
  }
}

let mapDispatchToProps=(dispatch)=>{
  return{
    sendMessage:()=>{
      dispatch(sendMessageCreator())
    },
    updateNewMessageBody:(body)=>{
      dispatch(updateNewMessageBodyCreator(body))
    }
  }
}


let AuthRedirectComponent=withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent) 

export default DialogsContainer;