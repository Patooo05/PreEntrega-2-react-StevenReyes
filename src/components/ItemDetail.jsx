import React, { useState, useContext } from "react"
import ItemCount from "./ItemCount"
import { Cart } from "../context/CartProvider"
import CounterWithState from "./CounterWithState"
import { NavLink } from "react-router-dom"
import Styles from "../styles/itemdetail.module.css"

const ItemDetail = ({ product }) => {
    const {addCart} = useContext(Cart)
    const [itemCountVisibility, setItemCountVisibility] = useState(true)
   

    const handleCart = (quantity) => {
       
        setItemCountVisibility(false)
        addCart(product, quantity)
    }

    return (
        <div className= {Styles["item-detail-container"]}>
        <div className= {Styles["item-detail-image"]}>
          <img src={product.pictureUrl} alt={product.title} />
        </div>
        
        <div className= {Styles["item-detail-content"]}>
          <h1 className= {Styles["item-detail-title"]}>{product.title}</h1>
          <p className= {Styles["item-detail-description"]}>{product.description}</p>
          <p className= {Styles["item-detail-price"]}>${product.price}</p>
          
          {itemCountVisibility ? (
            <ItemCount addCart={handleCart} />
          ) : (
            <NavLink to="/cart" className={Styles["go-to-cart-button"]}>Go to Cart</NavLink>
          )}
        </div>
      </div>
      
    )
}

export default ItemDetail