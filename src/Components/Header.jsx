import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { RES_LOGO } from '../utils/constants';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
	const [login, SetLogin] = useState(true);
	const OnlineStatus = useOnlineStatus();
	const { LoggedInUser } = useContext(UserContext);
	const cartItems = useSelector((store) => store?.cart?.items);
	return (
		<div className="flex flex-col md:flex-row justify-between items-center p-4 mx-4 my-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg shadow-md">
			<div className="logo-container">
				<img className="w-16 h-16" src={RES_LOGO} />
			</div>
			<div className="nav-items">
				<ul className="flex space-x-4 md:space-x-6 mt-2 md:mt-0">
					<li className="hover:underline text-sm md:text-base">
						Online Status: {OnlineStatus ? '✅' : '❌'}
					</li>
					<li className="hover:underline text-sm md:text-base">
						<Link to={'/'}>Home</Link>
					</li>
					<li className="hover:underline text-sm md:text-base">
						<Link to={'/About'}>About</Link>
					</li>
					<li className="hover:underline text-sm md:text-base">
						<Link to={'/Contact'}>Contact</Link>
					</li>
					<li className="hover:underline text-sm md:text-base">
						<Link to={'/cart'}>Cart - {cartItems.length}</Link>
					</li>
					<li className="px-2 border border-white rounded-lg bg-white text-blue-500 hover:bg-gray-100 text-sm md:text-base">
						<button
							// className="px-4 py-2 border border-white rounded-lg bg-white text-blue-500 hover:bg-gray-100 text-sm md:text-base"
							onClick={() => {
								login ? SetLogin(false) : SetLogin(true);
							}}>
							{login ? 'Login' : 'Logout'}
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Header;
