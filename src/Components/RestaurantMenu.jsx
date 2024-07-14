import Shimmer from './Shimmer';
import useRestaurantMenu from '../utility/useRestaurantMenu';
import { useParams } from 'react-router-dom';
const RestaurantMenu = () => {
	const { resId } = useParams();
	const resMenuDet = useRestaurantMenu(resId);
	if (resMenuDet === null) {
		return <Shimmer />;
	}
	const { name, costForTwoMessage, cuisines } =
		resMenuDet?.cards[2]?.card?.card?.info;
	const { itemCards } =
		resMenuDet?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card;
	return (
		<div className="Res-Menu">
			<h1>{name}</h1>
			<h4>{cuisines.join(', ')}</h4>
			<h5>{costForTwoMessage}</h5>

			{itemCards.map((item) => (
				<ul key={resMenuDet?.cards[2]?.card?.card?.info?.id}>
					<li>
						{item.card.info.name} - Rs.{' '}
						{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
					</li>
				</ul>
			))}
		</div>
	);
};
export default RestaurantMenu;
