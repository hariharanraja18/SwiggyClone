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
			<div className="text-center w-6/12 mx-auto my-5 p-5">
				<h1 className="text-center font-bold">Cart</h1>
                <button onClick={()=>ClearItems()} className="border border-black p-2 m-2"> Clear</button>
				<div>
					<ItemList items={cartItems} />
				</div>
                {cartItems.length ===0 && <h1>Cart is empty</h1> }
			</div>
		);
}
export default Cart;