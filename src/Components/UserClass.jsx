import React from 'react';
class UserClass extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props.name + 'Child Constructor called');
		this.state = {
			count: 0,
		};
	}
	componentDidMount(){
		console.log(this.props.name + 'Child component did mount');
	}
	render() {
		console.log(this.props.name+'Child render called');
		const { name, address, email } = this.props;
		const { count} = this.state;
		return (
			<div className="user-card">
				<h1>Count:{count}</h1>
				<button onClick={()=>{
                    this.setState({
                       count: this.state.count +1,
                    });
                }}>Increase Count</button>
				<h2>Name: {name}(class)</h2>
				<h3>address:{address}</h3>
				<h4>contact:{email}</h4>
			</div>
		);
	}
}
export default UserClass;
