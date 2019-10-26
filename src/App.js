import React from 'react';
import logo from './logo.svg';
import './App.css';

const players = [
  {name: 'LDK', score: 30, id: 1},
  {name: 'HONG', score: 40, id: 2},
  {name: 'KIM', score: 50, id: 3},
  {name: 'PARK', score: 60, id: 4},
];

const Header = ({title, totalPlayers}) => {
  // console.log(props);
  // const {title, totalPlayers} = props; // desctruct assignment
  return (
    <header className="header">
      <h1 className="h1">{title}</h1>
      <span className="stats">Plaers: {totalPlayers}</span>
    </header>
  );
}
// function  컴포넌트를 class 컴포넌트로 전환
class Counter extends React.Component {
  state = {
    score: 0,
    name: 'aaa'
  }

  incrementScore = () => {
    console.log('increment: ', this);

    // this.state.score += 1; // => 안된다.
    this.setState(prevState => ({score: prevState.score + 1}));
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

const Player = (props) => (
  <div className="player">
		<span className="player-name">
			<button className="remove-player" onClick={() => props.removePlayer(props.id)}> x </button>
      {props.name}
		</span>
    <Counter score={props.score}/>
  </div>
);

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
