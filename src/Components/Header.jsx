import { useState } from "react";

const Header = () => {
	const [login,SetLogin]=useState(true)
	return (
		<div className="header">
			<div className="logo-container">
				<img
					className="logo"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlb_uJqnEegXqkgFyGdqNxoEWu0g5Le0GETA&s"
				/>
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Cart</li>
					<button className="loginBtn" onClick={()=>{
						login? SetLogin(false):SetLogin(true);
					}}>{login?"Login":"Logout"}</button>
				</ul>
			</div>
		</div>
	);
};
export default Header;
