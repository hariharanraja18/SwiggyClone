import ItemList from './ItemList';

const RestaurantMenuData = ({ data, showItems, SetIndex }) => {
	const handleClick = () => {
		console.log(showItems);
		SetIndex(false);
	};
	return (
		<div className="w-full md:w-8/12 lg:w-6/12 mx-auto my-4 border-b-2 border-gray-300 shadow-md bg-white p-4 rounded-lg">
			<div
				className="flex items-center justify-between cursor-pointer"
				onClick={()=>handleClick()}>
				<span className="font-bold text-gray-800 text-lg md:text-xl">
					{data?.title} - ({data?.itemCards?.length})
				</span>
				<span className="text-lg">{'⬇️'}</span>
			</div>
			{showItems && <ItemList items={data?.itemCards} />}
		</div>
	);
};
export default RestaurantMenuData;
