import React from 'react';
// import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
	const counter = useSelector(state => state.counterReducer);
	const isLogged = useSelector(state => state.loggedReducer);
	const dispatch = useDispatch();

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Counter: {counter}</h1>
				<button onClick={() => dispatch(increment())}>Increment</button>
				<button onClick={() => dispatch(decrement())}>Decrement</button>
				<h3>{isLogged ? 'You are logged in!' : 'You are not logged in.'}</h3>
			</header>
		</div>
	);
}

export default App;
