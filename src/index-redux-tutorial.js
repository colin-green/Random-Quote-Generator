import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';

// Action: Describes what you want to do (Increment)
// function that returns an object

const increment = () => {
	return {
		type: 'INCREMENT',
	};
};

const decrement = () => {
	return {
		type: 'DECREMENT',
	};
};

// Reducer: Describes how actions transform current state into next state

const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state + 1;
		default:
			break;
	}
};

// Store: Globalized State

let store = createStore(counter);
// Display it in console
store.subscribe(() => console.log(store.getState()));

// Dispatch: Execute actions, send them to reducer

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

// Overall: Dispatch action to reducer, reducer checks what to do, and store gets updated

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
