import React, { useState } from 'react';
import './ProjectCard.css'

function ProjectCard(props) {
  const [currentImage, setCurrentImage] = useState(0);

  function handlePreviousClick() {
    // Use the modulo operator to calculate the index of the previous image
    const previousImage = (currentImage - 1 + props.images.length) % props.images.length;
    setCurrentImage(previousImage);
  }

  function handleNextClick() {
    // Use the modulo operator to calculate the index of the next image
    const nextImage = (currentImage + 1) % props.images.length;
    setCurrentImage(nextImage);
  }

  return (
    <div className="image-carousel">
      <img src={props.images[currentImage]} alt="" />
      <span>
        <button className="previous-button" onClick={handlePreviousClick}>
          &lt;
        </button>
        <button className="next-button" onClick={handleNextClick}>
          &gt;
        </button>
      </span>
      <div className="description">
        {props.description}
      </div>
    </div>
  );
}

export default ProjectCard;