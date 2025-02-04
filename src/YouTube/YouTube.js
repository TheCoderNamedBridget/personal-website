import React from 'react';
import YouTubeCard from './YouTubeCard';
import '../Table.css';
import './YouTubeCard.css'

function YouTube() {
  return (
    <div>
      <h1 id="title">YouTube</h1>
      <table className="table">
          <YouTubeCard className="YouTubeCard" videoId="sfNdZdKZ-yo" title="Debugging Video"/>
          <YouTubeCard className="YouTubeCard" videoId="gF3ka4hlOQ4" title="Interning Akamai Video"/>
          <YouTubeCard className="YouTubeCard" videoId="vXAeTh8f4C4" title="Get an Internship as a Sophomore Video"/>
      </table>
    </div>

  );
}

export default YouTube;
