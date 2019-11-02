import React from 'react';
import PropTypes from 'prop-types';

// function  컴포넌트를 class 컴포넌트로 전환
export class Counter extends React.Component {
	incrementScore = (delta) => {
		console.log('increment: ', this);

		// this.state.score += 1; // => 안된다.
		this.props.changeScore(this.props.id, delta);
	}

	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement" onClick={() => this.incrementScore(-1)}> - </button>
				<span className="counter-score">{this.props.score}</span>
				<button className="counter-action increment" onClick={() => this.incrementScore(1)}> + </button>
			</div>
		);
	}
}

Counter.propTypes = {
	id: PropTypes.number,
	score: PropTypes.number,
	changeScore: PropTypes.func
}