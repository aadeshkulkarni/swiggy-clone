import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/slices/cartSlice'

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-xl">Cart</h1>
            <div className="w-6/12 m-auto">
                <button onClick={() => { handleClearCart() }} className="p-2 m-2 bg-black text-white rounded-lg">Clear cart</button>
                {cartItems.length === 0 && <h2>Cart is Empty. Add items to the Cart!</h2>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart