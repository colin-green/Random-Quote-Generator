import React, { Component } from 'react';
import './App.css';
// import { useSelector, useDispatch } from 'react-redux';
import QuoteBox from './components/QuoteBox/index';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
	// const counter = useSelector(state => state.counterReducer);
	// const isLogged = useSelector(state => state.loggedReducer);
	// const dispatch = useDispatch();

	return (
		<div className='App' style={{ background: 'rgb(0, 128, 0)' }}>
			<Container>
				<QuoteBox />
			</Container>
		</div>
	);
}

export default App;
