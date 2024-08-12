
import { useDispatch } from "react-redux";
import { CDN_LINK } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useState } from "react";

const ItemList = ({ items }) => {
	const dispatch = useDispatch();
	const[addedValue,setAddedValue]=useState(0);
	const handleAddItem=(item)=>{
		dispatch(addItem(item));   
		setAddedValue(addedValue+1);     
	}
	return (
		<div>
			{items?.map((item) => {
				return (
					<div
						key={item?.card?.info?.id}
						data-testid="itemList"
						className="flex flex-col md:flex-row items-center p-4 my-4 border border-gray-300 bg-blue-100 rounded-lg shadow-sm">
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
								{addedValue ===0 && (
									<button
										className="absolute top-28 shadow-lg left-20  transform -translate-x-1/2 bg-white border-gray-300 font-bold text-blue-900 p-2 rounded-lg hover:bg-blue-100 w-full md:w-auto"
										onClick={() => handleAddItem(item)}>
										Add
									</button>
								)}
								{addedValue > 0 && (
									<button
										className="absolute top-28 shadow-lg left-20 flex  transform -translate-x-1/2 bg-white border-gray-300 font-bold text-blue-900 p-2 rounded-lg hover:bg-blue-100 w-full md:w-auto"
										onClick={() => handleAddItem(item)}>
										<button className="mx-1" >-</button>
										{addedValue}
										<button className="mx-1">+</button>
									</button>
								)}
							</div>
							<img
								className="w-full h-32"
								src={CDN_LINK + item?.card?.info?.imageId}
							/>
						</div>
					</div>
				);})
			}
		</div>
	);
};
export default ItemList;
