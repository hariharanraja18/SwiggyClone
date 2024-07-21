import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useParams } from 'react-router-dom';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';
const RestaurantMenu = () => {
	const { resId } = useParams();
	const resMenuDet = useRestaurantMenu(resId);
	const[showIndex,SetShowIndex]=useState(null)
	if (resMenuDet === null) {
		return <Shimmer />;
	}
	const { name, costForTwoMessage, cuisines } =
		resMenuDet?.cards[2]?.card?.card?.info;
	// const { itemCards } =
	// 	resMenuDet?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card;
	const categories =
		resMenuDet?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(item) => {
				return (
					item?.card?.card?.['@type'] ===
						'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory' ||
					item?.card?.card?.['@type'] ===
						'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
				);
			}
		);
	return (
		<div className="text-center">
			<div>
				<h1 className="font-bold text-xl m-5">{name}</h1>
				<h4 className="font-bold m-2 p-2">
					{cuisines.join(', ')} - {costForTwoMessage}
				</h4>
			</div>
			{categories?.map((category,index) => {
				return <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={index===showIndex?true:false} SetIndex={()=>SetShowIndex(index)}/>;
			})}
		</div>
	);
};
export default RestaurantMenu;
