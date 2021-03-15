import React from 'react'
import * as axios from "axios";
import Frends from './Frends';
import { connect } from 'react-redux'
import { follow, setUsers, unfollow, setCurrentPage,setTotalUsersCount,toggleIsFetching, toggleFollowingProgress} from '../../redux/frends-reducer'
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class FrendsContainer extends React.Component{

    componentDidMount(){
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then(data=>{   
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);                
            this.props.setTotalUsersCount(data.totalCount)
          }) 
    }

    onPageChanged=(pageNumber)=>{
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
        .then(data=>{
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
            })
    }
  
    render(){
      return <>
      {this.props.isFetching ?<Preloader/>:null}
      <Frends totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      toggleFollowingProgress={this.props.toggleFollowingProgress}
                      followingInProgress={this.props.followingInProgress}
             />
             </>
    }
  }

let mapStateToProps=(state)=>{
    return{
        users:state.frendsPage.users,
        pageSize:state.frendsPage.pageSize,
        totalUsersCount:state.frendsPage.totalUsersCount,
        currentPage:state.frendsPage.currentPage,
        isFetching:state.frendsPage.isFetching,
        followingInProgress:state.frendsPage.followingInProgress
    }
}


export default connect(mapStateToProps, 
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress})(FrendsContainer)