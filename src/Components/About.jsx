import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
	constructor(){
		console.log('Parent constructor called');
		super();
		
	}
	componentDidMount(){
		console.log('Parent component did mount');
	}
	render(){
		console.log('Parent render called');
		return (
			<div>
				<h1>About us</h1>
				<h2>This is Namaste React course</h2>
				<h3>taught by akshay saini</h3>
				<UserClass name="first" address="chennai" email="hari@gmail.com" />
				<UserClass name="second" address="chennai" email="hari@gmail.com" />
				<UserClass name="third" address="chennai" email="hari@gmail.com" />
			</div>
		);
	}
}

export default About;