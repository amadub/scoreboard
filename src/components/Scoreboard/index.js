import React from 'react';
import Player from './Player';
import './styles.css';

class Scoreboard extends React.Component {
  render() {
    return(
      <div className="scoreboard-container" >
        <h2 className="scoreboard-title" >Players:</h2>
        <ul className="players-list" >
          {
            (this.props.players.length > 0 ?
            this.props.players.map((player) => {
              return (
                <Player
                  key={player.name}
                  player={player}
                  removePlayer={this.props.removePlayer}
                  changeScore={this.props.changeScore}
                  resetScore={this.props.resetScore}
                />
              )
            })
            :
            <p>Please add players to start.</p>
            )
          }
        </ul>
      </div>
    )
  }
}

export default Scoreboard;
