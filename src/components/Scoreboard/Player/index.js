import React from 'react';
import './styles.css';

class Player extends React.Component {
  render() {
    return(
      <li className='player-info' >
        <button className='remove-player__button' onClick={() => {this.props.removePlayer(this.props.player.name)}}>X</button>
        <span className='player-name' >{this.props.player.name}</span> - <span className="player-score" >{this.props.player.score}</span>
        <button className='change-score__button' onClick={() => {this.props.changeScore(this.props.player.name, -1)}}>-</button>
        <button className='change-score__button' onClick={() => {this.props.resetScore(this.props.player.name)}}>Reset</button>
        <button className='change-score__button' onClick={() => {this.props.changeScore(this.props.player.name, 1)}}>+</button>
      </li>
    )
  }
}

export default Player;
