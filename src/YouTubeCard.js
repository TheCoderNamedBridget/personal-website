import React, { useState } from 'react';
import './YouTubeCard.css';

function YouTubeCard({videoId, title}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  // Create an onClick handler for the iframe
  // This will toggle the state of the video between playing and paused
  function handleIframeClick() {
    setIsPlaying(!isPlaying);
  }
  return (
    <div className="youtube">
      <iframe src={videoUrl} title={title} allowFullScreen onClick={handleIframeClick} />
    </div>
  );
}

export default YouTubeCard;
