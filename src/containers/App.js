import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry'


class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	//Funcion que se ejecuta cuando se monta el componente App
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users =>this.setState({robots:users}));
	}

	//Funcion propia que se enviara para ser ejecutada por otro componente
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render(){
		const {robots,searchfield} = this.state;
		const filteredrobots = robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		return !robots.length ?
			<h1>Loading</h1> :
		(	
			<div className='tc'>
				<h1 className='f1'> RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredrobots}/>
					</ErrorBoundry>
				</Scroll>
			</div>
		);
		
	}
}

export default App;