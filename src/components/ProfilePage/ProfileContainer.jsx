import * as axios from "axios";
import { connect } from 'react-redux'
import React from 'react'
import { setUserProfile} from '../../redux/profile-reducer'
import ProfilePage from './ProfilePage'
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId=this.props.match.params.userId

        if(!userId){
            userId=1
        }
        /* axios.get(`http://localhost:3001/items/`+userId)
        .then(response=>{   
            this.props.setUserProfile(response.data);        
          }) */ /* мой запрос */
        https://social-network.samuraijs.com/api/1.0/users
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
        .then(response=>{   
            this.props.setUserProfile(response.data);        
          })
    }

  render(){
      return(
            <ProfilePage {...this.props} profile={this.props.profile}/>
      )
  }
}

let mapStateToProps=(state)=>({
    profile:state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{setUserProfile})(WithUrlDataContainerComponent);