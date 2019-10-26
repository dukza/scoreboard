import React from 'react';

// function  컴포넌트를 class 컴포넌트로 전환
export class Counter extends React.Component {
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