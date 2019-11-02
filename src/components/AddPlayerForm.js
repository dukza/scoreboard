import React from 'react';

export class AddPlayerForm extends React.Component {
	state = {
		value: ''
	}

	handleValueChange = (e) => {
		console.log(e);
		this.setState({value: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();

		const player = document.getElementById('player');
		if (!player.validity.valid) {
			alert('player is not valid');
			return;
		}

		this.props.addPlayer(this.state.value);
	}

	render() {
		return (
			<form className="form" onSubmit={this.handleSubmit.bind(this)} noValidate>
				<input id="player" className="input" type="text" placeholder="enter a player's name" required
					value={this.state.value} onChange={this.handleValueChange}/>
				<input className="input" type="submit" value="Add Player"></input>
			</form>
		);
	}
}
