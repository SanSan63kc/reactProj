import React from 'react'
import classes from './Dialogs.module.css'
import DialogUserLink from './DialogUserLink/DialogUserLink'
import DialogWithUser from './DialogWithUser/DialogWithUser'

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

  let newMessageBody=state.newMessageBody

  let onSendMessageClick=()=>{
    props.sendMessage()
  }

  let onNewMessageChange=(e)=>{
    let body = e.target.value;
    props.updateNewMessageBody(body)
  }

  return(
      <div className={classes.dialogs}>
        <div className={classes.user__list}>
          {dialogElements}
        </div> 

        <div className={classes.dialog__list}>
          {messagesElements}

          <div className={classes.addMess}>
              <textarea
                className={classes.addMess__input} 
                value={newMessageBody} 
                onChange={onNewMessageChange}
                placeholder='Напишите сообщение'
              >
              </textarea>
              <button 
                className={classes.addMess__btn}
                onClick={onSendMessageClick} 
                type="button">
                  Отправить
              </button>
          </div>  
        </div>   
      </div>
    )
}

export default Dialogs;