import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { RES_LOGO } from '../utils/constants';

const Header = () => {
	const [login, SetLogin] = useState(true);
	const OnlineStatus = useOnlineStatus();
	return (
		<div className="flex justify-between p-1 mx-4 my-1 border border-black">
			<div className="logo-container">
				<img className="w-16 h-16" src={RES_LOGO} />
			</div>
			<div className="nav-items">
				<ul className="flex p-2 m-2">
					<li className="px-4 py-2 mx-4">
						Online Status: {OnlineStatus ? '✅' : '❌'}
					</li>
					<li className="px-4 py-2  mx-4">
						<Link to={'/'}>Home</Link>
					</li>
					<li className="px-4 py-2  mx-4">
						<Link to={'/About'}>About</Link>
					</li>
					<li className="px-4 py-2  mx-4">
						<Link to={'/Contact'}>Contact</Link>
					</li>
					<li className="px-4 py-2  mx-4">Cart</li>
					<div>
						<button
							className="px-4 py-2 mx-4 border border-black rounded-lg bg-gray-200 hover:bg-gray-300"
							onClick={() => {
								login ? SetLogin(false) : SetLogin(true);
							}}>
							{login ? 'Login' : 'Logout'}
						</button>
					</div>
				</ul>
			</div>
		</div>
	);
};
export default Header;
