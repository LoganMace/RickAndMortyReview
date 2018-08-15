import React, { Component } from 'react';
import axios from 'axios';
import Favorites from './Favorites/Favorites';

import './Characters.css'

class Characters extends Component {

  constructor(){
    super();
    this.state = {
      characters: [],
      favorites: [],
      search: ''
    }
  }

  componentDidMount(){
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log('response: ', response.data.results);
        this.setState({
          characters: response.data.results
        })
      })
  }

  addFavorite = (char) => {
    axios
      .post('/api/people', char)
      .then((response) => {
        console.log('response: ', response);
        this.setState({
          favorites: response.data
        })
      })
  }

  removeFavorite = (id) => {
    axios
      .delete(`/api/people/${id}`)
      .then((response) => {
        console.log('response: ', response);
        this.setState({
          favorites: response.data
        })
      })
  }

  updateName = (id, name, event) => {
    event.preventDefault();
    axios
      .put(`/api/people/${id}`, {name})
      .then((response) => {
        this.setState({
          favorites: response.data
        })
      })
  }

  searchHandler = (e) => {
    this.setState({
      search: e.target.value
    })
  }


  render() {

    console.log(this.state);

    let chars = this.state.characters.filter((char) => char.name.toLowerCase().includes(this.state.search)).map((char) => {
      return(
        <div className='charWrapper' key={char.id}>
          <img className='charImg' src={char.image} alt={char.name}/>
          <div className='charText'>
            <h6 className='charName'><span>{char.name}</span>({char.species})</h6>
            <p>{char.origin.name}</p>
          </div>
          <button className='addBtn' onClick={() => this.addFavorite(char)}>+</button>
        </div>
      )  
    })
    

    return (
      <div>
        <h1>Favorites:</h1>
        <Favorites 
          favorites={this.state.favorites}
          removeFavorite={this.removeFavorite}
          updateName={this.updateName}
        />
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Characters:</h1>
        <input type="text" placeholder='Search...' value={this.state.search} onChange={this.searchHandler}/>
        <div className='charPage'>
          {chars}
        </div>
      </div>
    );
  }
}

export default Characters;