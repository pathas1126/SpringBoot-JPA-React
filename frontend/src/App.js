import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

function App() {
	const [message, setMessage] = useState('');
	const count = useSelector((state) => state.count);
	const dispatch = useDispatch();

	useEffect(() => {
		axios
			.get('/api/sayHello')
			.then((res) => setMessage(res.data))
			.catch((e) => console.log(e));
	}, []);

	const increaseCount = () => {
		dispatch.count.incrementAsync(1);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				Hello
				<p>{message}</p>
				<hr />
				{count}
				<button onClick={increaseCount}>+</button>
			</header>
		</div>
	);
}

export default App;
