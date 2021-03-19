import * as axios from "axios";
import { connect } from 'react-redux'
import React from 'react'
import { getUserProfile} from '../../redux/profile-reducer'
import ProfilePage from './ProfilePage'
import { Redirect, withRouter } from "react-router-dom";


class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId=this.props.match.params.userId

        if(!userId){
            userId=15056
        }
        this.props.getUserProfile(userId)
    }
    
  render(){
    if (!this.props.isAuth) return <Redirect to={"/login"}/>
      return(
            <ProfilePage {...this.props} profile={this.props.profile}/>
      )
  }
}

let mapStateToProps=(state)=>({
    profile:state.profilePage.profile,
    isAuth:state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{getUserProfile})(WithUrlDataContainerComponent);