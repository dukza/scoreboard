import React from 'react';
import {Counter} from "./Counter";

export class Player extends React.Component {
	render() {
		console.log(this.props.name, ' is rendered');
		return (
			<div className="player">
		<span className="player-name">
			<button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}> x </button>
			{this.props.name}
		</span>
				<Counter score={this.props.score} id={this.props.id} changeScore={this.props.changeScore}/>
			</div>
		);
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		// 기존 score와 nextProps의 score 가 다르면 true
		return this.props.score !== nextProps.score ? true : false;
	}
}