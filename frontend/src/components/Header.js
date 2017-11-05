import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/header.css';

class Header extends Component {
	render(){
		return (
		    <div className="header"> 
		        <Link to="/">SaveSpace</Link>
		        <Link className="header-title" to="/about">About</Link>
		        <Link className="header-title" to="/contact">Contact</Link>
		    </div>
		);
	}
};

export default Header;