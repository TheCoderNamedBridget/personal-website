import React from 'react';
import './App.css';
import pic from './assets/Images/ProfilePic.jpg';
import NavBar from './NavBar';
import Projects from './Projects';
import Employment from './Employment';
import Footer from './Footer';
import Profile from './Profile';
import YouTube from './YouTube';

function App() {
  return (
    <div className="container">
      <NavBar/>
      <div className="content">
        <Profile pic={pic}/>
        <div id="Projects"/>
          <Projects/>
        <div id="YouTube"/>
          <YouTube/>
        <div id="Employment"/>
          <Employment/>
        <div id="Footer"/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
