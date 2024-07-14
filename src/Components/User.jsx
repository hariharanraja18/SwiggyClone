import { useState } from "react";

const User =({name,address,email})=>{
    const [count]=useState(0);
    const [count1] = useState(1);
    return (
			<div className="user-card">
				<h1>Count:{count}</h1>
				<h1>Count:{count1}</h1>
				<h2>Name: {name}(function)</h2>
				<h3>address:{address}</h3>
				<h4>contact:{email}</h4>
			</div>
		);
}
export default User;