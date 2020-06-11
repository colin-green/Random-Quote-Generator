import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './style.css';
import twitter from '../../images/iconfinder_twitter_173834.png';

class QuoteBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quotes: [
				{
					quote: '“The Way Get Started Is To Quit Talking And Begin Doing.”',
					author: 'Walt Disney',
				},
				{
					quote:
						'“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.”',
					author: 'Winston Churchill',
				},
				{
					quote: '“Don’t Let Yesterday Take Up Too Much Of Today.”',
					author: 'Will Rogers',
				},
				{
					quote:
						'“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.”',
					author: 'Unknown',
				},
				{
					quote:
						'“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.”',
					author: 'Vince Lombardi',
				},
				{
					quote:
						'“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.”',
					author: 'Steve Jobs',
				},
				{
					quote:
						'“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.”',
					author: 'Rob Siltanen',
				},
				{
					quote:
						'“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.”',
					author: 'Og Mandino',
				},
				{
					quote:
						'“Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.”',
					author: 'Mohnish Pabrai',
				},
				{
					quote: '“We May Encounter Many Defeats But We Must Not Be Defeated.”',
					author: 'Maya Angelou',
				},
			],
			currrentIndex: 0,
			tweetIntent: '',
			currentQuote: '',
			currentAuthor: '',
		};
		this.handleClick = this.handleClick.bind(this);
	}

	encodeURL(str) {
		return encodeURIComponent(str.trim());
	}

	componentDidMount() {
		let roll = Math.floor(Math.random() * this.state.quotes.length);
		this.setState({
			currrentIndex: roll,
			currentQuote: this.encodeURL(this.state.quotes[roll].quote),
			currentAuthor: this.encodeURL(this.state.quotes[roll].author),
			tweetIntent: `https://twitter.com/intent/tweet?text=${this.encodeURL(
				this.state.quotes[roll].quote
			)}%20-${this.encodeURL(
				this.state.quotes[roll].author
			)}&hashtags=inspirational%2Crandom%2Cquote`,
		});
	}

	handleClick() {
		let roll = Math.floor(Math.random() * this.state.quotes.length);
		while (roll === this.state.currrentIndex) {
			roll = Math.floor(Math.random() * this.state.quotes.length);
		}
		this.setState({
			currrentIndex: roll,
			currentQuote: this.encodeURL(this.state.quotes[roll].quote),
			currentAuthor: this.encodeURL(this.state.quotes[roll].author),
			tweetIntent: `https://twitter.com/intent/tweet?text=${this.encodeURL(
				this.state.quotes[roll].quote
			)}%20-${this.encodeURL(
				this.state.quotes[roll].author
			)}&hashtags=inspirational%2Crandom%2Cquote`,
		});
	}

	render() {
		return (
			<Card style={{ width: '25rem' }} id='quote-box' className='mx-auto'>
				<Card.Body>
					<Card.Title className='text-center' id='text'>
						{this.state.quotes[this.state.currrentIndex].quote}
					</Card.Title>
					<Card.Text className='text-right' id='author'>
						-{this.state.quotes[this.state.currrentIndex].author}
					</Card.Text>
					<Card.Link
						href={this.state.tweetIntent}
						target='_blank'
						id='tweet-quote'
					>
						<img src={twitter} style={{ height: 50 }} alt='Twitter Icon' />
					</Card.Link>
					<Button onClick={this.handleClick} id='new-quote'>
						New Quote
					</Button>
				</Card.Body>
			</Card>
		);
	}
}

export default QuoteBox;
