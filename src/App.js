import React from 'react';
import './App.css';
import pic from './assets/Images/ProfilePic.jpg';
import NavBar from './Nav/NavBar';
import Projects from './Project/Projects';
import Employment from './Employment/Employment';
import Footer from './Footer/Footer';
import Profile from './Profile/Profile';
import YouTube from './YouTube/YouTube';

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
