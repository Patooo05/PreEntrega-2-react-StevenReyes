import CounterWithState from"./CounterWithState"
import { useNavigate } from "react-router-dom"; 
import { NavLink } from "react-router-dom";
import "../styles/Item.css"
import ItemDetail from "./ItemDetail"
 

const Item = ({item}) => {

 
  return (
          <div>
            <div className="product-card" key={item.id}>
                <h4 className="product-title">{item.title}</h4>
                <p className="product-description">{item.description}</p>
                <span className="product-price">${item.price}</span>
                <br />
                <button className="add-to-cart-button">Carrito</button>
                <CounterWithState/>
                <br />
                <NavLink to={`/detail/${item.id}`}>
                <button className="add-to-cart-button"> Detail</button>
                </NavLink>
              </div>
           
          </div>
      )
}


export default Item

