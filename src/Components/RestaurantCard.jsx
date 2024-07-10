import { CDN_LINK } from "../utility/constants";
const RestaurantCard = (props) => {
	// const { name, cloudinaryImageId,cuisines,avgRating } = props;
	return (
		<div className="rescard">
			<img
				id="ResImg"
				src={CDN_LINK + props.resData.cloudinaryImageId}
				alt="RestaurantImage"
				srcset=""
			/>

			<h3>{props.resData.name}</h3>
			<p>{props.resData.cuisines.join(", ")}</p>
			<p>{props.resData.avgRating} Stars</p>
			<p>{props.resData.sla.slaString}</p>
		</div>
	);
};
export default RestaurantCard;
// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/
