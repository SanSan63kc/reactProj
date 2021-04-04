import React from 'react'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators/validators'
import { Textarea } from '../common/FormsControls/FormsControls'
import classes from './Dialogs.module.css'
import DialogUserLink from './DialogUserLink/DialogUserLink'
import DialogWithUser from './DialogWithUser/DialogWithUser'

const maxLength50=maxLengthCreator(50)

const Dialogs = (props)=>{

  let state=props.dialogsPage;

  let dialogElements=state.dialogsData
    .map(d=>
      <DialogUserLink 
        name={d.name} 
        userId={d.id} 
        key={d.id}
        userAvatar={d.avatar}
      />
      )

  let messagesElements=state.messagesData
    .map(m=>
      <DialogWithUser 
        message={m.message}
        key={m.id}
      />
  )

  /* let newMessageBody=state.newMessageBody */

  let addNewMessage=(values)=>{
    props.sendMessage(values.newMessageBody)
  }

  if (!props.isAuth) return <Redirect to={"/login"}/>

  return(
      <div className={classes.dialogs}>
        <div className={classes.user__list}>
          {dialogElements}
        </div> 
        <div className={classes.dialog__list}>
          {messagesElements}        
        </div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    )
}

const AddMessageForm=(props)=>{
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.addMess}>
              <Field /* className={classes.addMess__input} */ component={Textarea}
                      validate={[required,maxLength50]} 
                      name="newMessageBody" placeholder="Напишите сообщение"/>
              <button className={classes.addMess__btn}>Отправить</button>
          </div> 
    </form>
  )
}

const AddMessageFormRedux=reduxForm({form:"dialodAddMessageForm"})(AddMessageForm)

export default Dialogs;