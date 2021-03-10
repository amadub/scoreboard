import React from 'react';
import './styles.css';

class AddPlayer extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addPlayer(e.target.playerName.value);
      e.target.reset();
    }
  render() {
    return(
      <div>
        <form className="add-player__form" onSubmit={this.handleSubmit}>
          <input className="field-input" type="text" name="playerName" />
          <button className="button">Add Player</button>
        </form>
      </div>
    )
  }
}

export default AddPlayer;
