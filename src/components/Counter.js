import React from 'react';

// function  컴포넌트를 class 컴포넌트로 전환
export class Counter extends React.Component {
	incrementScore = () => {
		console.log('increment: ', this);

		// this.state.score += 1; // => 안된다.
		this.props.changeScore();
	}

	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement"> - </button>
				<span className="counter-score">{this.props.score}</span>
				<button className="counter-action increment" onClick={this.incrementScore}> + </button>
			</div>
		);
	}
}