import React from 'react';
import Scoreboard from './components/Scoreboard';
import AddPlayer from './components/AddPlayer';
import './styles.css';

class App extends React.Component {
  state = {
    players: [],
    error: ''
  }

  handleChangeScore = (playerName, amount) => {
    this.setState((prevState) => {
      const newArray = prevState.players.map((player) => {
        if (player.name === playerName) {
          return ({
            "name": player.name,
            "score": player.score + amount
          })
        } else {
          return player
        }
      })
      return {players: newArray}
    })
  }

  handleResetScore = (playerName) => {
    this.setState((prevState) => {
      const newArray = prevState.players.map((player) => {
        if (player.name === playerName) {
          return ({
            "name": player.name,
            "score": 0
          })
        } else {
          return player
        }
      })
      return {players: newArray}
    })
  }

  handleRemovePlayer = (playerName) => {
    this.setState((prevState) => {
      const newArray = prevState.players.filter((player) => {
        return player.name !== playerName
      })
      return {players: newArray}
    })
  }

  handleAddPlayer = (playerName) => {
    if (playerName === '' || !playerName) {
      this.setState({error: 'Player must have a name.'});
    } else {
      this.setState((prevState) => {
        let errorBool = false;
        prevState.players.forEach((player) => {
          if(player.name === playerName) {
            errorBool = true;
          }
        })
        if(!errorBool) {
          const newArray = prevState.players.concat({"name": playerName, "score": 0});
          return {players: newArray, error: ''}
        } else {
          return {error: 'Player Already Exists!'}
        }
      })
    }
  }

  render() {
    return(
      <div>
        <p>{this.state.error}</p>
        <Scoreboard
          players={this.state.players}
          changeScore={this.handleChangeScore}
          resetScore={this.handleResetScore}
          removePlayer={this.handleRemovePlayer}
        />
        <AddPlayer addPlayer={this.handleAddPlayer}/>
      </div>
    )
  }
}

export default App;
