import { useContext } from 'react';
import { CDN_LINK } from '../utils/constants';
import UserContext from '../utils/UserContext';
const RestaurantCard = (props) => {
	// const { name, cloudinaryImageId,cuisines,avgRating } = props;
	const {LoggedInUser}=useContext(UserContext)
	return (
		<div className="bg-gray-200 rounded-lg p-1 m-1 w-[260px] h-[385px]">
			<img
				className="w-[250px] h-[225px] rounded-lg"
				id="ResImg"
				src={CDN_LINK + props.resData.cloudinaryImageId}
				alt="RestaurantImage"
			/>
			<h3 className="font-bold p-1 m-1">{props.resData.name}</h3>
			<p className="px-1 mx-1">{props.resData.cuisines.join(', ')}</p>
			<p className="px-1 mx-1">{props.resData.avgRating} Stars</p>
			<p className="px-1 mx-1">{props.resData.sla.slaString}</p>
			<h1>{LoggedInUser}</h1>
		</div>
	);
};
export default RestaurantCard;

export const WithPromoted = (RestaurantCard) => {
	return (props) => {
		return (
			<div>
				<label className='absolute bg-neutral-500 rounded-lg text-white p-2'>Open</label>
				<RestaurantCard {...props} />
			</div>
		);
	};
};
