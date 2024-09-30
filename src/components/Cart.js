import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList.";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{

     const cartItems = useSelector((store)=>store.cart.items);
     console.log(cartItems);
     const dispatch = useDispatch();

const handleClearCart=()=>{
dispatch(clearCart())
}


    return (

        <div>
            <div className= "flex justify-around">
            <h1 className="text-canter mb-2 text-3xl  font-bold  mt-10 p-4">Cart</h1>
            <button 
            onClick={handleClearCart}
            className="bg-black shadow-md shadow-gray-400 rounded-lg mt-14 text-white  px-2">Clear Cart</button>
            </div>
            {!cartItems.length && <p className="text-center text-xl font-semibold">cart is empty add some items</p>}
            {/* cartItems.length ? <itemList/> : <p> cart is empty */}
     <ItemList items={cartItems}/>
           
        </div>
    )
}
export default Cart;