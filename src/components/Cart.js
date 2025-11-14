import { clearCart } from "../utils/cartSlice"
import ItemList from "./ItemList"
import { useDispatch, useSelector } from "react-redux"




const Cart =()=>{
        const dispatch=useDispatch()
        const cartItems= useSelector((store)=> store.cart.items)
        const handleClearCart = ()=>{
            dispatch(clearCart())
        }

    return (
        <div className="text-center m-10 p-10">
        <h1 className="text-2xl font-bold">Cart</h1>  
        <button onClick={handleClearCart} className="p-2 m-2 bg-black rounded-lg text-white"> Clear Cart</button>
        <ItemList items={cartItems} />
        </div>
    )
}

export default Cart 