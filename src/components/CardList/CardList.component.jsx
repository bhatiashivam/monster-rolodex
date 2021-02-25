import React from 'react';

import Card from '../Card/Card.component';

import './CardList.styles.css';

const CardList = (props) => {
  return (
    <div className='card-list'>
      {props.allMonsters.map((monster, index) => {
      return (
        <Card 
        key={index}
        index={monster.id} 
        name={monster.name} 
        email={monster.email}/>
      );
      })}
    </div>
  );
}

export default CardList;