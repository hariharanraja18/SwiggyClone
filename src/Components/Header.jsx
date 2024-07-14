import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";

const Header = () => {
	const [login,SetLogin]=useState(true)
	const OnlineStatus= useOnlineStatus();
	return (
		<div className="header">
			<div className="logo-container">
				<img
					className="logo"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlb_uJqnEegXqkgFyGdqNxoEWu0g5Le0GETA&s"
				/>
			</div>
			<div className="nav-items">
				<ul className="hd">
					<li>
						Online Status: {OnlineStatus?"✅":"❌"}
					</li>
					<li>
						<Link to={'/'}>Home</Link>
					</li>
					<li>
						<Link to={'/About'}>About</Link>
					</li>
					<li>
						<Link to={'/Contact'}>Contact</Link>
					</li>
					<li>Cart</li>
					<button
						className="loginBtn"
						onClick={() => {
							login ? SetLogin(false) : SetLogin(true);
						}}>
						{login ? 'Login' : 'Logout'}
					</button>
				</ul>
			</div>
		</div>
	);
};
export default Header;
