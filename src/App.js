import React, { Component } from 'react';
import { Form } from './Form'
import { AnimalContainer } from './AnimalContainer'
import './App.css';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      isLoading: true,
      animals: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/animals')
      .then(res => res.json())
      .then(data => this.setState({ animals: data, isLoading: false }))
  }

  submitAnimal = animal => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        "id": Date.now(),
        "name": animal.name,
        "diet": animal.diet,
        "fun_fact": animal.fun_fact
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch('http://localhost:3001/api/v1/animals', options)
      .then(res => res.json())
      .then(data => this.setState({ animals: [...this.state.animals, animal] }))
  }

  deleteAnimal = id => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    
    fetch(`http://localhost:3001/api/v1/animals/${id}`, options)
      .then(data => {
        const newAnimalList = this.state.animals.filter(animal => animal.id !== id)
        this.setState({ animals: newAnimalList})
      })
  }

  render() {
    return (
      <div>
        <h1>Animals</h1>
        <Form submitAnimal={this.submitAnimal} />
        {
          !this.state.isLoading
          ? <AnimalContainer 
              animals={this.state.animals}
              deleteAnimal={this.deleteAnimal}
            />
          : <h3>loading</h3>
        }
      </div>
    )
  }

}

export default App;