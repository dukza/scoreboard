import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from "./components/Player";

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 30, id: 1},
      {name: 'HONG', score: 40, id: 2},
      {name: 'KIM', score: 50, id: 3},
      {name: 'PARK', score: 60, id: 4},
    ]
  }
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={11} />

        {/*Player's List*/}
        {
          this.state.players.map(player => <Player name={player.name} score={player.score} id={player.id}
                                                   key={player.id} removePlayer={this.handleRemovePlayer.bind(this)} />)
        }
      </div>
    );
  }
  handleRemovePlayer(id) {
    // 삭제 로직
    console.log('handleRemovePlayer: ', id);
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id);
      return {players};
    })
  }
}

export default App;
