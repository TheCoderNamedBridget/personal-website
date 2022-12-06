import React from 'react';
import './Profile.css';
import {FULL_NAME, ABOUT} from './constants';

function Profile(props) {
  return (
    <div className="flex-container">
      <img src={props.pic} height="300" width="300" alt="profile pic" className="profile-pic"/>
      <div className="name">{FULL_NAME}</div>
      <div className="about">{ABOUT}</div>
    </div>
  )
}

export default Profile;
