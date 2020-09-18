import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
	const [message, setMessage] = useState('');
	useEffect(() => {
		axios
			.get('/api/sayHello')
			.then((res) => setMessage(res.data))
			.catch((e) => console.log(e));
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>
				Hello
				<p>{message}</p>
			</header>
		</div>
	);
}

export default App;
