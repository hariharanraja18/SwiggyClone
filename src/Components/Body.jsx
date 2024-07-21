import RestaurantCard, { WithPromoted } from './RestaurantCard';
import { useState, useEffect, useContext } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext.js';

const Body = () => {
	const [listOfRestaurant, setListOfRestaurant] = useState([]);
	const [filteredRestaurant, setFilteredRestaurant] = useState([]);
	const [searchText, setSearchText] = useState('');
	const PromotedRestaurant = WithPromoted(RestaurantCard);
	const {SetUserName,LoggedInUser}=useContext(UserContext);
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
			<div className="m-1 p-1">
				<div className="flex">
					<div className="flex p-1 m-1 gap-1">
						<input
							type="text"
							className="border border-black"
							value={searchText}
							onChange={(e) => {
								setSearchText(e.target.value);
							}}
						/>
						<button
							className="border border-black bg-gray-200 p-1.5 rounded-lg hover:bg-gray-300"
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
							className="border border-black bg-gray-200 p-1 ml-10 rounded-lg hover:bg-gray-300"
							onClick={() => {
								const filterLogic = listOfRestaurant.filter((res) => {
									return res.info.avgRating > 4;
								});
								setFilteredRestaurant(filterLogic);
							}}>
							Top Restaurants
						</button>
						<label >UserName:</label>
						<input type="text" value={LoggedInUser} className='border border-black p-2' onChange={(e)=> SetUserName(e.target.value)} />
					</div>
				</div>

				<div className="m-1 p-1 flex flex-wrap gap-5">
					{filteredRestaurant.map((restaurant) => (
						<Link
							key={restaurant.info.id}
							to={'/restaurants/' + restaurant.info.id}>
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
