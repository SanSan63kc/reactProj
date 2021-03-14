import React from 'react'
import * as axios from "axios";
import Frends from './Frends';
import { connect } from 'react-redux'
import { follow, setUsers, unfollow, setCurrentPage,setTotalUsersCount,toggleIsFetching} from '../../redux/frends-reducer'
import Preloader from '../common/Preloader/Preloader';

class FrendsContainer extends React.Component{

    componentDidMount(){
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {
            withCredentials:true
        })
        .then(response=>{   
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);                
            this.props.setTotalUsersCount(response.data.totalCount)
          }) 
    }
  
    onPageChanged=(pageNumber)=>{
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        {
            withCredentials:true
        })
        .then(response=>{
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
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
        isFetching:state.frendsPage.isFetching
    }
}


export default connect(mapStateToProps, 
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(FrendsContainer)