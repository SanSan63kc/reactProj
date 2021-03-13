import React, {Component} from 'react'
import {BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FrendsContainer from './components/Frends/FrendsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/ProfilePage/ProfileContainer';
import Settings from './components/Settings/Settings';

const App=(props)=>{

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
          
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
        </div>   
      </div>
    </BrowserRouter>);
}

export default App;
