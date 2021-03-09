import React from 'react';

class Player extends React.Component {
  render() {
    return(
      <li>
        <button onClick={() => {this.props.removePlayer(this.props.player.name)}}>X</button>
        {this.props.player.name} - {this.props.player.score}
        <button onClick={() => {this.props.changeScore(this.props.player.name, -1)}}>-</button>
        <button onClick={() => {this.props.resetScore(this.props.player.name)}}>Reset</button>
        <button onClick={() => {this.props.changeScore(this.props.player.name, 1)}}>+</button>
      </li>
    )
  }
}

export default Player;
