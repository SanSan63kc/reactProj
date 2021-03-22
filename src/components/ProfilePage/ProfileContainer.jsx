import * as axios from "axios";
import { connect } from 'react-redux'
import React from 'react'
import { getStatus, getUserProfile, updateStatus} from '../../redux/profile-reducer'
import ProfilePage from './ProfilePage'
import { Redirect, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId=this.props.match.params.userId

        if(!userId){
            userId=15056
        }
        this.props.getUserProfile(userId)
        /* setTimeout(()=>{ */
            this.props.getStatus(userId)
        /* },10000) */
        
    }
    
  render(){
    
      return(
            <ProfilePage {...this.props} 
            profile={this.props.profile} 
            status={this.props.status}
            updateStatus={this.props.updateStatus}/>
      )
  }
}

let mapStateToProps=(state)=>({
    profile:state.profilePage.profile,
    status:state.profilePage.status
})

export default compose(
    connect(mapStateToProps,{getUserProfile, getStatus,updateStatus}),
    withRouter/* ,
    withAuthRedirect */
)(ProfileContainer)