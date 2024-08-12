import RestaurantCard, { WithPromoted } from './RestaurantCard';
import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext.js';

const Body = () => {
	const [listOfRestaurant, setListOfRestaurant] = useState([]);
	const [filteredRestaurant, setFilteredRestaurant] = useState([]);
	const [searchText, setSearchText] = useState('');
	const PromotedRestaurant = WithPromoted(RestaurantCard);
	const { SetUserName, LoggedInUser } = useContext(UserContext);
	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		const data = await fetch(
			'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
		);
		const json = await data.json();
		setListOfRestaurant(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		setFilteredRestaurant(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};
	const OnlineStatus = useOnlineStatus();
	if (OnlineStatus === false) return <h1>Looks like you are offline...</h1>;
	else
		return listOfRestaurant.length === 0 ? (
			<Shimmer />
		) : (
			<div className="m-1 p-1 w-full">
				<div className="bg-blue-50 rounded-lg shadow-lg m-4 p-4 w-full">
					<div className="flex flex-wrap p-2 m-2 gap-2 w-full">
						<input
							type="text"
							className="border border-gray-400 rounded-md p-2 focus:outline-none focus:border-blue-500 flex-grow md:flex-grow-0 md:w-1/2 lg:w-2/3 shadow-lg"
							data-testid="input"
							value={searchText}
							onChange={(e) => {
								setSearchText(e.target.value);
							}}
						/>
						<button
							className="border border-gray-300 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 w-full md:w-auto"
							onClick={() => {
								// filter the Restaurant and update the UI.

								const filteredRestaurant = listOfRestaurant.filter((res) => {
									return res.info.name
										.toLowerCase()
										.includes(searchText.toLowerCase());
								});
								setFilteredRestaurant(filteredRestaurant);
							}}>
							Search
						</button>
						<button
							className="border border-gray-300 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 w-full md:w-auto"
							onClick={() => {
								const filterLogic = listOfRestaurant.filter((res) => {
									return res.info.avgRating > 4.3;
								});
								setFilteredRestaurant(filterLogic);
							}}>
							Top Restaurants
						</button>
						{/* <label>UserName:</label>
						<input
							type="text"
							value={LoggedInUser}
							className="border border-black p-2"
							onChange={(e) => SetUserName(e.target.value)}
						/> */}
					</div>
				</div>

				<div className="mx-auto my-4 p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{filteredRestaurant.map((restaurant) => (
						<Link
							key={restaurant.info.id}
							to={'/restaurants/' + restaurant.info.id}
							className="flex justify-center">
							{restaurant.info.isOpen ? (
								<PromotedRestaurant resData={restaurant?.info} />
							) : (
								<RestaurantCard resData={restaurant?.info} />
							)}
						</Link>
					))}
				</div>
			</div>
		);
};

export default Body;
