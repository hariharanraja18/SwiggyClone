import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
const Body = () => {
	const [listOfRestaurant, setListOfRestaurant] = useState([]);
	const [filteredRestaurant, setFilteredRestaurant] = useState([]);
	const [searchText, setSearchText] = useState('');
	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		const data = await fetch(
			'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
		);
		const json = await data.json();
		setListOfRestaurant(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		setFilteredRestaurant(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};
	return listOfRestaurant.length === 0 ? (
		<Shimmer />
	) : (
		<div className="container body">
			<div className="filter-btn">
				<div className="search">
					<input
						type="text"
						className="search-box"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					/>
					<button
						className="searchBtn"
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
				</div>
				<button
					id="TopresBtn"
					onClick={() => {
						const filterLogic = listOfRestaurant.filter((res) => {
							return res.info.avgRating > 4;
						});
						setFilteredRestaurant(filterLogic);
					}}>
					Top Restaurants
				</button>
			</div>
			<div className="RestaurantContainer">
				{filteredRestaurant.map((restaurant) => (
					<RestaurantCard key={restaurant.info.id} resData={restaurant?.info} />
				))}
			</div>
		
		</div>
	);
};

export default Body;
