import React from 'react';
import Player from './Player';

class Scoreboard extends React.Component {
  render() {
    return(
      <div>
        Players:
        <ul>
          {
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
          }
        </ul>
      </div>
    )
  }
}

export default Scoreboard;
