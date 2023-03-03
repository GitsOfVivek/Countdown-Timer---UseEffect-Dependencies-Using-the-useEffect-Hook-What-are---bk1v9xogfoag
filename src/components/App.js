import React, { Component, useState, useEffect } from 'react';
import '../styles/App.css';

const App = () => {
	// write your code here
	const [time, setTime] = useState('0');

	const interval = setInterval(() => {
		setTime(time - 1);
	}, 1000);

	if (time < 1) {
		clearInterval(interval);
	}

	useEffect(() => {
		return () => clearInterval(interval);
	}, [time]);

	return (
		<div className="wrapper">
			<div id="whole-center">
				<h1>
					Reverse countdown for
					<input
						id="timeCount"
						onKeyDown={e => setTime(e.target.value)}
					/>{' '}
					sec.
				</h1>
			</div>
			<div id="current-time">
				{!isNaN(time) ? parseInt(time).toFixed() : '0'}
			</div>
		</div>
	);
};

export default App;
