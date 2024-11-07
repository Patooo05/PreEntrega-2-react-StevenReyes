import React, { useContext } from 'react'; 
import { Link, NavLink } from "react-router-dom";
import styles from "../styles/navbar.module.css"; 
import { Theme } from "../context/ThemeProvider" 
import CartWidget from "./CartWidget";
import Switch from "./Switch";
import switchStyles from "../styles/switch.module.css" 
import { Cart } from "../context/CartProvider";


export const NavBar = () => {
  // Acceder al contexto dentro del cuerpo del componente
  const { dark, setDark } = useContext(Theme);

  return (
    <ul>
      <li>
        <NavLink className={({ isActive }) => 
          isActive ? styles.isActive : styles.notActive} to={"/"}>Home
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => 
          isActive ? styles.isActive : styles.notActive} to={"/category/consolas"}>
          Categoria A
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => 
          isActive ? styles.isActive : styles.notActive} to={"/category/accesorios"}>
          Categoria B
        </NavLink>
      </li>
      <li> 
        <Switch checked={dark} setChecked={setDark} />
      </li>

    <li>
       <CartWidget />
    </li>
  
    </ul>
  );
}

export default NavBar;
