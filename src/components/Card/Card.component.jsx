import React from 'react';
import './Card.styles.css';

const Card = (props) => {
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/${props.index}?set=set2&size=180x180`} alt="monster"/>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
};

export default Card;