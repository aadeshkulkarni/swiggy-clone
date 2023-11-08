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
        <div className="p-4 m-4 text-center">
            <h1 className="text-xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                {cartItems.length !== 0 ? <button onClick={() => { handleClearCart() }} className="p-2 m-2 text-white bg-black rounded-lg">Clear cart</button> : <h2>Cart is Empty. Add items to the Cart!</h2>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart