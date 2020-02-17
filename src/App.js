import React, { Component } from 'react';
import './index.css'
import Table from './table.js';

class App extends Component {
  removeCharacter = index => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }
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

  render() {
    const { characters } = this.state
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
      </div>
    )
  }
}

export default App;
