import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css'
import { setSearchField }from '../action'
import { connect } from 'react-redux'
/*
Connect - is high-order function, it returns another function.
*/

const mapStateToProps = state => {
	return {
		searchField: state.searchRobot.searchField
	}
}
//dispatch triggers our action
const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}

}
class App extends Component {
	constructor() {
		super()
		this.state ={
			robots:[]
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>{
			return response.json();
		})
		.then(users =>{
			this.setState({robots:users})
		})
		
	}

	render(){
		const {robots} = this.state;
		const {searchField, onSearchChange} =this.props;
			const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(searchField.toLowerCase())
			})
		return (
		<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={onSearchChange}/>
			<Scroll>
				<CardList robots={filteredRobots}/>
			</Scroll>
		</div>
	);	
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps)(App);