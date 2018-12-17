import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { getChars, addFav, getSingle } from '../../ducks/charReducer';

import './Characters.css'

class Characters extends Component {

  constructor(){
    super();
    this.state = {
      // characters: [],
      search: ''
    }
  }

  componentDidMount(){
    // axios.get('api/chars')
    //   .then(response => {
    //     this.setState({
    //       characters: response.data
    //     })
    //   })
    this.props.getChars()
  }

  // addFavorite = (char) => {
  //   axios
  //     .post('/api/people', char)
  //     .then((response) => {
  //       this.setState({
  //         favorites: response.data
  //       })
  //     })
  // }

  // removeFavorite = (id) => {
  //   axios
  //     .delete(`/api/people/${id}`)
  //     .then((response) => {
  //       this.setState({
  //         favorites: response.data
  //       })
  //     })
  // }

  // updateName = (id, name, event) => {
  //   event.preventDefault();
  //   axios
  //     .put(`/api/people/${id}`, {name})
  //     .then((response) => {
  //       this.setState({
  //         favorites: response.data
  //       })
  //     })
  // }

  searchHandler = (e) => {
    this.setState({
      search: e.target.value
    })
  }


  render() {
    console.log(this.props);

    let chars = this.props.characters.filter((char) => char.name.toLowerCase().includes(this.state.search)).map((char) => {
      return(
        <div className='charWrapper' key={char.id}>
          <img className='charImg' src={char.image} alt={char.name}/>
          <div className='charText' onClick={() => this.props.getSingle(char.id)}>
            <h6 className='charName'><span>{char.name}</span>({char.species})</h6>
            <p>{char.origin.name}</p>
          </div>
          <button className='addBtn' onClick={() => this.props.addFav(char)}>+</button>
        </div>
      )  
    })
    

    return (
      <div>
        <h1>Characters:</h1>
        <input type="text" placeholder='Search...' value={this.state.search} onChange={this.searchHandler}/>
        <div className='charPage'>
          {chars}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state.chars;

export default connect(mapStateToProps, { getChars, addFav, getSingle })(Characters);