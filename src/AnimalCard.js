import React from 'react';
import './AnimalCard.css'

export const AnimalCard = ({ animal, deleteAnimal }) => {
  return ( 
    <div className='card'>
      <h3>{animal.name}</h3>
      <p>{animal.diet}</p>
      <p>{animal.fun_fact}</p>
      <button onClick={() => deleteAnimal(animal.id)}>delete</button>
    </div>
  )
}