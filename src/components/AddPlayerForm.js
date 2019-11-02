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
		this.props.addPlayer(this.state.value);
	}

	render() {
		return (
			<form className="form" onSubmit={this.handleSubmit.bind(this)}>
				<input className="input" type="text" placeholder="enter a player's name"
					value={this.state.value} onChange={this.handleValueChange}/>
				<input className="input" type="submit" value="Add Player"></input>
			</form>
		);
	}
}
