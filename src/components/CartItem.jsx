import React, { useContext } from "react"; 
import styles from "../styles/cartItem.module.css";
import { Cart } from "../context/CartProvider"; 

const CartItem = ({ item }) => {
    const { removeItem } = useContext(Cart); 
    return (
        <div className={styles.cartItem}>
            <img src={item.pictureUrl} alt={item.title} />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <p>{item.quantity}</p>
            <button onClick={() => removeItem(item.id)}>Delete</button>
        </div>
    );
}

export default CartItem;
