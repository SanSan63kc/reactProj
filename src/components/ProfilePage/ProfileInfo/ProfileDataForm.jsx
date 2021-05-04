import React from "react"
import { reduxForm } from "redux-form"
import { createField , Input, Textarea} from "../../common/FormsControls/FormsControls"

const ProfileDataForm=({handleSubmit, profile})=>{
    return <form onSubmit={handleSubmit}>
            <div><button>save</button></div>
            <div>
                Полное имя:{createField("Full name","fullName",[],Input)}
            </div>
            <div>
                Ищу работу:
                {createField("","lookingForAJob",[],Input, {type:"checkbox"})}
            </div>        
            <div>
                Мои скиллы:
                {createField("скиллы...","lookingForAJobDescription",[],Textarea)}
            </div>
            <div>
                Обо мне:{profile.aboutMe}
                {createField("обо мне...","aboutMe",[],Textarea)}
            </div>
            {/* <div>
                Контакты:{Object.keys(profile.contacts).map(key=>{
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                }) }
            </div> */}
            </form>
  }

const ProfileDataFormReduxForm = reduxForm({form:'editProfile'})(ProfileDataForm)
export default ProfileDataFormReduxForm