import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart =()=>{
    const cartItems = useSelector((state)=> state.cart.items)
    const dispatch=useDispatch();
    const ClearItems=()=>{
        dispatch(clearCart());
        console.log("cleared")
    }
    return (
			<div className="text-center font-semibold text-gray-700 w-full sm:w-8/12 md:w-6/12 mx-auto my-5 p-6 bg-gray-50 rounded-lg shadow-lg">
				<h1 className="text-center font-bold">Cart</h1>
				<button
					onClick={() => ClearItems()}
					className="border border-gray-300 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 w-full md:w-auto">
					{' '}
					Clear
				</button>
				<div>
					<ItemList items={cartItems} />
				</div>
				{cartItems.length === 0 && <h1>Cart is empty</h1>}
			</div>
		);
}
export default Cart;