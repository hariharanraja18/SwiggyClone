// import { useContext } from 'react';
import { CDN_LINK } from '../utils/constants';
// import UserContext from '../utils/UserContext';
const RestaurantCard = (props) => {
	const { resData } = props;
	// const { name, cloudinaryImageId,cuisines,avgRating } = props;
	// const { LoggedInUser } = useContext(UserContext);
	return (
		<div
			data-testid="card"
			className="bg-blue-100 shadow-lg rounded-lg p-4 m-2 w-full sm:w-[260px] h-auto md:h-[385px] transform transition duration-500 hover:scale-105">
			<img
				className="w-full h-[200px] sm:h-[225px] rounded-lg object-cover"
				id="ResImg"
				src={CDN_LINK + props?.resData?.cloudinaryImageId}
				alt="RestaurantImage"
			/>
			<h3 className="font-bold text-lg mt-2 mb-1 text-gray-800 text-center">
				{resData?.name}
			</h3>
			<p className="text-sm font-semibold text-gray-600 text-center">
				{resData?.cuisines?.join(', ')}
			</p>
			<p className="text-sm font-semibold text-gray-600 text-center">
				{resData?.avgRating} Stars
			</p>
			<p className="text-sm font-semibold text-gray-600 text-center">
				{resData?.sla?.slaString}
			</p>
			{/* <h1>{LoggedInUser}</h1> */}
		</div>
	);
};
export default RestaurantCard;

export const WithPromoted = (RestaurantCard) => {
	return (props) => {
		return (
			<div>
				<label 
				// className="absolute bg-neutral-500 rounded-lg text-white p-2"
				>
					
				</label>
				<RestaurantCard {...props} />
			</div>
		);
	};
};
