import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeItem } from '../../redux/cartSlice'

export default function Cart() {
    const dispatch = useDispatch()
    const {items} = useSelector(state => state.cart)
  return (
    <div>
        <h1>Cart</h1>
        {items.length === 0 && <p>Giỏ hàng rỗng</p>}
        {
            items.map(item => (
                <p key={item.id}>
                    <h4>{item.name}</h4>
                    <button onClick={() => dispatch(removeItem(item.id))} >Delete product</button>
                </p>
            ))
        }
        {items.length > 0 && (
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        )}
    </div>
  )
}