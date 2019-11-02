import React from 'react';
import {Counter} from "./Counter";

export class Player extends React.Component {
	render() {
		console.log(this.props.name, ' is rendered');

		const {removePlayer, id, name, score, changeScore} = this.props;

		return (
			<div className="player">
				<span className="player-name">
					<button className="remove-player" onClick={() => removePlayer(id)}> x </button>
					{name}
				</span>
				<Counter score={score} id={id} changeScore={changeScore}/>
			</div>
		);
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		// 기존 score와 nextProps의 score 가 다르면 true
		return this.props.score !== nextProps.score ? true : false;
	}
}