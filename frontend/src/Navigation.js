import React,{ Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';

class Navigation extends Component{
	render() {
		return (
			<main>
				<Switch>
					<Route exact path="/" component={Home}/>
				</Switch>
			</main>

		);
	} 
};

export default Navigation;