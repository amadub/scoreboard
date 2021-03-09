import React from 'react';

class AddPlayer extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addPlayer(e.target.playerName.value);
      e.target.reset();
    }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="playerName" />
          <button>Add Player</button>
        </form>
      </div>
    )
  }
}

export default AddPlayer;
