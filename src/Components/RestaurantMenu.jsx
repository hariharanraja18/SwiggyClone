import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { RES_MENU } from '../utility/constants';
import { useParams } from 'react-router-dom';
const RestaurantMenu = () => {
	const [resMenuDet, SetResMenuDet] = useState(null);
    const {resId}=useParams();

	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		const data = await fetch(RES_MENU + resId);
		const json = await data.json();
		SetResMenuDet(json.data);
		console.log(json.data);
	};
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
			<h4>{cuisines}</h4>
			<h5>{costForTwoMessage}</h5>

			{itemCards.map((item) => (
				<li key={resMenuDet?.cards[2]?.card?.card?.info?.id}>
					{item.card.info.name} - {item.card.info.price / 100 || item.card.info.defaultPrice/100}
				</li>
			))}
		</div>
	);
};
export default RestaurantMenu;
