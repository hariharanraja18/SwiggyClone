
import { useDispatch } from "react-redux";
import { CDN_LINK } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
	const dispatch = useDispatch();
	const handleAddItem=(item)=>{
		dispatch(addItem(item));   
		      
	}
	return (
		<div>
			{items?.map((item) => {
				return (
					<div
						key={item?.card?.info?.id}
						data-testid= "itemList"
						className="text-left my-2 py-2 border-b-2 h-auto flex border-gray-300">
						<div className="w-9/12">
							<h3 className="font-bold">{item?.card?.info?.name}</h3>
							<h4 className="font-semibold">
								₹
								{item?.card?.info?.price
									? item?.card?.info?.price / 100
									: item?.card?.info?.defaultPrice / 100}
							</h4>
							<p className="my-1 py-1">{item?.card?.info?.description}</p>
						</div>
						<div className="h-auto w-3/12 m-4">
							<div className="absolute">
								<button className="text-center border border-white text-white p-2 bg-black rounded-lg mx-16 my-32" onClick={()=>handleAddItem(item)}>
									Add
								</button>
							</div>
							<img className="" src={CDN_LINK + item?.card?.info?.imageId} />
						</div>
					</div>
				);})
			}
		</div>
	);
};
export default ItemList;
