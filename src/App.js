import React, { Component } from 'react';
import './index.css'
import Table from './table.js';
import Form from './form/form.js';
import APIdevelopment from './API/api-dev.js';

class App extends Component {
  
  state = {
    characters: [
      {
        nama: 'Daniel',
        belakang: 'Setyawan',
      },
      {
        nama: 'David',
        belakang: 'Dwiyanto',
      },
      {
        nama: 'Solichin',
        belakang: 'Sodikhin',
      },
      {
        nama: 'Samiin',
        belakang: 'Samiiun',
      },]
  }
  
  removeCharacter = index => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  render() {
    const { characters } = this.state
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit}/>
        <br/>
        <p> Mengambil API dan menambahkan state component :</p>
        <APIdevelopment />
      </div>
    )
  }
}

export default App;
