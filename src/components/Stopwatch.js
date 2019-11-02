import React from 'react';

export class Stopwatch extends React.Component {
	tickRef;

	render() {
		return (
			<div className="stopwatch">
				<h2>StopWatch</h2>
				<span className="stopwatch-time">0</span>
				<button>Start</button>
				<button>Reset</button>
			</div>
		);
	}

	tick() {}

	// Dom이 렌더링 된 직후에 호출
	//  jquery, 스크롤바, 등 Dom과 관련된 메서드, 네트워크 호출 초기화
	componentDidMount() {
		this.tickRef = setInterval(this.tick, 1000);
	}

	// Dom이 파괴되기 직전에 호출
	componentWillUnmount() {
		clearInterval(this.tickRef);
	}
}
