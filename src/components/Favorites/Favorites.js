import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getFavorites, deleteFav, updateName } from '../../ducks/favReducer';

class Favorites extends Component{

  constructor(props){
    super(props);
    this.state = {
      newName: ''
    }
  }

  componentDidMount() {
    this.props.getFavorites()
  }

  changeNameHandler = (e) => {
    console.log(e.target.value);
    this.setState({
      newName: e.target.value
    })
  }

  render(){
    console.log(this.props);

    let favs = this.props.favs.favorites.map((char) => {
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
          <button className='addBtn' onClick={() => this.props.deleteFav(char.id)}>-</button>
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


const mapStateToProps = state => state;

export default connect(mapStateToProps, { getFavorites, deleteFav, updateName })(Favorites);