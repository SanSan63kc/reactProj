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
        <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
      </div>
    )
}

export default ProfilePage;