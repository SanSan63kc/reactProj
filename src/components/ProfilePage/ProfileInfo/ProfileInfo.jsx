import React, { useState } from 'react'
import Preloader from '../../common/Preloader/Preloader'
import ProfileDataForm from './ProfileDataForm'
import styles from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"

const ProfileInfo = ({profile,status,updateStatus,isOwner, savePhoto, saveProfile})=>{

  /* создам локальный state */
  const [editMode, setEditMode]=useState(false)

  if (!profile){
    return <Preloader/>
  }

  const onMainPhotoselected=(e)=>{
    if(e.target.files.length){
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit=(formData)=>{
    saveProfile(formData)
    /* здесь должен быть then, нов него не смог */
    setEditMode(false)
  }

    return(
        <div className={styles.profile__page}>
          <div className={styles.left__block}>
            
            <div className={styles.profile__ava}>
              <div className={styles.leftBlock_container}>
              <img src={profile.photos.large||"https://vk.com/images/camera_200.png"}/>
              {isOwner &&<input type={"file"} onChange={onMainPhotoselected}/>}
              </div>
            </div>
            {/* Блок подарков */}
            <div className={styles.bounty__block}>
              <div className={styles.leftBlock_container}>
                <div className={styles.bounty__title}>
                  <div className={styles.bounty__staticText}>Подарки</div>
                  <div className={styles.bounty__count}>{"props.profile.bounty"}</div>
                </div>
                <div className={styles.bounty__content}>
                  <div className={styles.bounty__item}>
                    <img src="https://vk.com/images/gift/1095/96.png"/>
                  </div>
                  <div className={styles.bounty__item}>
                    <img src="https://vk.com/images/gift/1095/96.png"/>
                  </div>
                  <div className={styles.bounty__item}>
                    <img src="https://vk.com/images/gift/1095/96.png"/>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frends__block}>
              <div className={styles.frends__main}>
                Друзья
              </div>
              <div className={styles.frends__online}>
                В сети
              </div>
            </div>
            <div className={styles.subscriptions__block}>
              Подписки
            </div>
            <div className={styles.photos__block}>
              фотографии
            </div>
            <div className={styles.videos__block}>
              Видеозаписи
            </div>
            <div className={styles.audio__block}>
              Аудиозаписи
            </div>
          </div>

          {/* Правая половинка странички */}
          <div className={styles.right__block}>
            <div className={styles.userMainInfo__block}>
              <div className={styles.rightBlock_container} >
                  <div className={styles.namestatus}>
                    <div className={styles.userName}>{profile.fullName}</div>
                    {/* <div className={styles.userStatus}>{props.profile.status}</div> */}
                    <div className={styles.userOnlineStatus}>{profile.onlineNow ?"online":"offline"}</div>
                  </div>
                  {/* Статус пользователя */}
                  <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                {/* Дата рождения */}
                <div className={styles.birthData__block}>
                  <div className={styles.birthData__static}>День рождения:</div>
                  <div className={styles.birthData__value}>{"props.profile.birthData"}</div>
                </div>
                {/* Место работы */}
                <div className={styles.work__block}>
                  <div className={styles.work__static}>Место работы:</div>
                  <div className={styles.workedIn__value}>{"props.profile.workedIn"}</div>
                </div>
                <div className={styles.mainInfo__title}>Основная информация</div>
                <div className={styles.liveIn__block}>
                  <div className={styles.liveIn__static}>Родной город:</div>
                  <div className={styles.liveIn__value}>{"props.profile.location.city"}</div>
                </div>
                <div className={styles.language__block}>
                  <div className={styles.language__static}>Языки:</div>
                  <div className={styles.language__value}>{"props.profile.location.country"}</div>
                </div>
                <div className={styles.mainInfo__title}>Контактная информация</div>
                <div className={styles.skype__block}>
                  <div className={styles.skype__static}>Skype:</div>
                  <div className={styles.skype__value}>{"props.profile.skype"}</div>
                </div>
                <div className={styles.instagram__block}>
                  <div className={styles.instagram__static}>Instagram:</div>
                  <div className={styles.instagram__value}>{"props.profile.instagram"}</div>
                </div>
                <div className={styles.mainInfo__title}>Образование</div>
                <div className={styles.studyIn__block}>
                  <div className={styles.studyIn__static}>Вуз:</div>
                  <div className={styles.studyIn__value}>{"props.profile.studyIn"} {"props.profile.studyEnd"}</div>
                </div>
                {/* Дополнение */}
                {editMode
                  ? <ProfileDataForm initialValues={profile}  profile={profile} onSubmit={onSubmit}/>
                  :<ProfileData goToEditMode={()=>{setEditMode(true)}} profile={profile} isOwner={isOwner}/>}              
                {/* Карточка со счётчиками пользователя (друзья, подписчики, фото, отметки, видео) */}
                <div className={styles.mainInfo__card}>
                    <div className={styles.mainInfo__cardItem}>
                      <div className={styles.mainInfo__cardCount}>{"props.profile.frends"}</div>
                      <div className={styles.mainInfo__cardText}>друзей</div>
                    </div>
                    <div className={styles.mainInfo__cardItem}>
                      <div className={styles.mainInfo__cardCount}>{"props.profile.followers"}</div>
                      <div className={styles.mainInfo__cardText}>подписчиков</div>
                    </div>
                    <div className={styles.mainInfo__cardItem}>
                      <div className={styles.mainInfo__cardCount}>{"props.profile.photos"}</div>
                      <div className={styles.mainInfo__cardText}>фотографий</div>
                    </div>
                    <div className={styles.mainInfo__cardItem}>
                      <div className={styles.mainInfo__cardCount}>{"props.profile.marks"}</div>
                      <div className={styles.mainInfo__cardText}>отметок</div>
                    </div>
                    <div className={styles.mainInfo__cardItem}>
                      <div className={styles.mainInfo__cardCount}>{"props.profile.videos"}</div>
                      <div className={styles.mainInfo__cardText}>видео</div>
                    </div>      
                  </div> 
              </div>
            </div>

            <div className={styles.myPhotos__block}>
              <div className={styles.rightBlock_container} >
                <div className={styles.myPhotos__title}>
                  <div className={styles.myPhotos__staticText}>Мои фотографии</div>
                  <div className={styles.myPhotos__count}>{"props.profile.photos"}</div>
                </div>
              </div>
            </div>

            <div className={styles.newPosts__block}>
              Сюда запихнуть постилку
            </div>

            <div className={styles.newPosts__block}>
              Сюда запихнуть хранилку постов
            </div>
          </div>
        </div>
    )
}

const ProfileData=({profile, isOwner, goToEditMode})=>{
  return <div>
          {isOwner&&<div><button onClick={goToEditMode}>edit</button></div>}
            <div>
              Полное имя:{profile.fullName}
            </div>
            <div>
              Ищу работу:{profile.lookingForAJob?"yes":"no"}
            </div>
              {profile.lookingForAJob??
            <div>
              Мои скиллы:{profile.lookingForAJobDescription}
            </div>}
            <div>
              Обо мне:{profile.aboutMe}
            </div>
            <div>
              Контакты:{Object.keys(profile.contacts).map(key=>{
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
              }) }
            </div>
          </div>
}




const Contact=({contactTitle, contactValue})=>{
  return <div><b>{contactTitle}</b>:{contactValue}</div>
}

export default ProfileInfo;