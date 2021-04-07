import React, {Component} from 'react'
import { connect } from 'react-redux';
import {BrowserRouter, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FrendsContainer from './components/Frends/FrendsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/ProfilePage/ProfileContainer';
import Settings from './components/Settings/Settings';
import { initializeApp } from './redux/app-reducer';

class App extends Component{
  
  componentDidMount(){
    this.props.initializeApp()
  }
  
  render(){

    if(!this.props.initialized){
      return <Preloader/>
    }
    
    return (
      <BrowserRouter>
        <div className="main__page__content">
          <HeaderContainer/>
          <Navbar/>
          <div className="profile__page__content">
            
            <Route path="/profile/:userId?" 
              render={()=><ProfileContainer/>}/>
            
            <Route path="/dialogs" 
              render={()=><DialogsContainer  />}/>

            <Route path="/frends" 
              render={()=><FrendsContainer/>}/>

            <Route path="/login" 
              render={()=><Login/>}/>
            
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
          </div>   
        </div>
      </BrowserRouter>
      );
    }
}


const mapStateToProps=(state)=>({
  initialized:state.app.initialized
})

export default compose(
  withRouter,
 connect(mapStateToProps,{initializeApp}))(App);
