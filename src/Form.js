import React, { Component } from 'react'
import './Form.css'

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      diet: '',
      fun_fact: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  sendAnimal = e => {
    e.preventDefault()
    const animal = { ...this.state }
    this.props.submitAnimal(animal)
    this.setState({ name: '', diet: '', fun_fact: ''})
  }

  render() {
    return (
      <div>
        <input 
          type='text'
          name='name'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='diet'
          placeholder='diet'
          value={this.state.diet}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='fun_fact'
          placeholder='fun fact'
          value={this.state.fun_fact}
          onChange={this.handleChange}
        />
        <button onClick={this.sendAnimal}>Submit</button>
      </div>
    )
  }
}