import React from 'react';
import './AnimalCard.css'

export const AnimalCard = ({ animal, deleteAnimal }) => {
  console.log(animal.id)
  return ( 
    <div>
      <h3>{animal.name}</h3>
      <p>{animal.diet}</p>
      <p>{animal.fun_fact}</p>
      <button onClick={() => deleteAnimal(animal.id)}>delete</button>
    </div>
  )
}