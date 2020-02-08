import React from 'react';
import './AnimalContainer.css';
import { AnimalCard } from './AnimalCard'

export const AnimalContainer = ({ animals, deleteAnimal }) => {
  const createCards = animals.map(animal => <AnimalCard animal={animal} deleteAnimal={deleteAnimal} />)
  return (
    <div className='container'>
      {createCards}
    </div>
  )
}