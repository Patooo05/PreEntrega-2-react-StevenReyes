import React, { useContext } from "react"
import { Cart as CartContext } from "../context/CartProvider"
import CartItem from "./CartItem"
import styles from "../styles/cart.module.css"
import { NavLink } from "react-router-dom"

const Cart = () => {
    const { cart, totalPrice } = useContext(CartContext)

    return (
        <div className={styles.container}>
            {cart.length ? (
                <>
                    {cart.map((cartItem) => (
                        <CartItem item={cartItem} key={cartItem.id} />
                    ))}
                    <h2>Total: ${totalPrice ? totalPrice.toFixed(2) : '0.00'}</h2> 
                </>
            ) : (
                <>
                    <h1>No hay productos en el cart</h1>
                    <NavLink to={"/"}>Home</NavLink>
                </>
            )}
        </div>
    )
}

export default Cart
