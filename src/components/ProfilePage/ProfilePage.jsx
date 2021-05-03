import React from 'react'
import Preloader from '../common/Preloader/Preloader'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const ProfilePage = (props)=>{
  if (!props.profile){
    return <Preloader/>
  }

  return(
      <div >
        <ProfileInfo isOwner={props.isOwner} savePhoto={props.savePhoto} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
      </div>
    )
}

export default ProfilePage;