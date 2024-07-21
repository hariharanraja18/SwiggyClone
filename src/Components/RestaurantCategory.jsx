import ItemList from './ItemList';

const RestaurantMenuData = ({ data, showItems, SetIndex }) => {
	const handleClick = () => {
		SetIndex();
	};
	return (
		<div className="w-6/12 mx-auto my-4 border-b-2 border-gray-300 shadow-lg bg-gray-50 p-4">
			<div
				className="flex justify-between cursor-pointer"
				onClick={handleClick}>
				<span className="font-bold">
					{data?.title} - ({data?.itemCards?.length})
				</span>
				<span>{'⬇️'}</span>
			</div>
			{showItems && <ItemList items={data?.itemCards} />}
		</div>
	);
};
export default RestaurantMenuData;
