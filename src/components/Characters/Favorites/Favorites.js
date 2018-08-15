import React, {Component} from 'react';

class Favorites extends Component{

  constructor(props){
    super(props);
    this.state = {
      newName: ''
    }
  }

  changeNameHandler = (e) => {
    console.log(e.target.value);
    this.setState({
      newName: e.target.value
    })
  }

  render(){
    console.log(this.state);

    let favs = this.props.favorites.map((char) => {
      return (
        <div className='charWrapper' key={char.id}>
          <img className='charImg' src={char.image} alt={char.name}/>
          <div className='charText'>
            <h6 className='charName'><span>{char.name}</span>({char.species})</h6>
            <p>{char.origin.name}</p>
            <form action="" onSubmit={(event) => this.props.updateName( char.id, this.state.newName, event)}>
              <input type="text" onChange={this.changeNameHandler}/>
            </form>
          </div>
          <button className='addBtn' onClick={() => this.props.removeFavorite(char.id)}>-</button>
        </div>
      )
    })
  
    return (
      <div className='charPage'>
        {favs}
      </div>
    );
  }
};

export default Favorites;