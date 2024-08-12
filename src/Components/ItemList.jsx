
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
						data-testid="itemList"
						className="flex flex-col md:flex-row items-center p-4 my-4 border border-gray-300 rounded-lg shadow-sm">
						<div className="w-full md:w-9/12">
							<h3 className="font-bold text-lg text-gray-800">
								{item?.card?.info?.name}
							</h3>
							<h4 className="font-bold text-lg text-gray-800">
								₹
								{item?.card?.info?.price
									? item?.card?.info?.price / 100
									: item?.card?.info?.defaultPrice / 100}
							</h4>
							<p className="my-1 py-1">{item?.card?.info?.description}</p>
						</div>
						<div className="h-auto w-3/12 m-4">
							<div className="relative w-full md:w-3/12">
								<button
									className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 w-full md:w-auto"
									onClick={() => handleAddItem(item)}>
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
