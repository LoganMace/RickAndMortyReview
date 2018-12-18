import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getSingle } from '../../ducks/charReducer';
import './SingleChar.css'

class SingleChar extends Component {

  componentDidMount() {
    this.props.getSingle(this.props.match.params.id);
  }

  render() {
    console.log(this.props);

    return (
      <div className='single-wrap'>
        <h2>{this.props.char.name}</h2>
        <img src={this.props.char.image} alt="" className='charImg'/>
        <div className='charText'>
          <p>{this.props.char.gender}</p>
          {/* <p>{this.props.char.origin.name}</p> */}
          <p>{this.props.char.species}</p>
          <p>{this.props.char.status}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state.chars;

export default connect(mapStateToProps, { getSingle })(SingleChar)