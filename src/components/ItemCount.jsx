import React, { useState } from "react"
import styles from "../styles/itemcount.module.css"

// addCart es una función
const ItemCount = ({ addCart }) => {
    const [count, setCount] = useState(0)

    // Incrementa el contador
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1)
    }

    // Decrementa el contador si count es mayor a 0
    const handleDecrement = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.operators}>
                <button onClick={handleDecrement}>-</button>
                <span>{count}</span>
                <button onClick={handleIncrement}>+</button>
            </div>
            <button className={styles.addcart} onClick={() => addCart(count)}>Add to cart</button>
        </div>
    )
}

export default ItemCount
