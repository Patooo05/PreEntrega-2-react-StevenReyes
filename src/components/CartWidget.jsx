


// CartWidget.jsx
import React, { useContext } from "react"
import { Cart as CartContext } from "../context/CartProvider"
import { NavLink } from "react-router-dom"
import styles from "../styles/cartWidget.module.css"
import cart from '../assets/cart.svg';

const CartWidget = () => {
    const { quantity } = useContext(CartContext) // Obtener `quantity` del contexto

    return (
        <NavLink to="/cart" className={styles.cartWidget}>
           <img src={cart} alt="cart" style={{width: 40}} />
            <i className="fas fa-shopping-cart"></i> 
           <span className={styles.cartCount}>{quantity}</span> 
        </NavLink>
    )
}

export default CartWidget