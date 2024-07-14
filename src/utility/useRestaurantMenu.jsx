import { useEffect, useState } from 'react';
import { RES_MENU } from '../utility/constants';
const useRestaurantMenu = (resId) => {
	const [resMenuDet, setresMenuDet] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		const data = await fetch(RES_MENU + resId);
		const json = await data.json();
		setresMenuDet(json.data);
	};
	return resMenuDet;
};
export default useRestaurantMenu;
