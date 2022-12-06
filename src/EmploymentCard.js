import React from 'react';
import './EmploymentCard.css'

function EmploymentCard(props) {
  return (
    <div className="employment-card">
      <h3>{props.title}</h3>
      <img src={props.pic} alt={props.description} />
      <p>{props.description}</p>
    </div>
  );
}

export default EmploymentCard;