import React from 'react';
import './Footer.css';
import LinkedInLogo from '../assets/Images/Footer/Linkedin.png'; 
import GithubLogo from '../assets/Images/Footer/Github.png'; 
import YouTubeLogo from '../assets/Images/Footer/YouTube.jpg'; 

function Footer() {
  return (
    <footer>
      <a href="https://github.com/TheCoderNamedBridget" className="github-button">
        <img src={GithubLogo} alt="GitHub logo"/>
      </a>
      <a href="https://www.youtube.com/channel/UCBsEU8xYyhhi2A9BgB4BrtA" className="youtube-button">
        <img src={YouTubeLogo} alt="YouTube logo" />
      </a>
      <a href="https://www.linkedin.com/in/bridget-naylor/" className="linkedin-button">
      <img src={LinkedInLogo} alt="LinkedIn logo" />
      </a>
    </footer>
  )
}

export default Footer;
