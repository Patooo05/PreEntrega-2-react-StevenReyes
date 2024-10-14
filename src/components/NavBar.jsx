import React from "react"; // Asegúrate de importar React
import { Link } from "react-router-dom"; // Importa Link
import "../styles/navbar.css"; // Importa los estilos CSS
import CartWidget from "./cartWidget"; // Importa el componente del carrito

export const NavBar = () => {
  return (
    <ul>
      <li><Link to={"/"}>Home</Link></li>
      <li><Link to={"/category/consolas"}>Categoria A</Link></li> {/* Cambiado aquí */}
      <li><Link to={"/category/accesorios"}>Categoria B</Link></li> {/* Cambiado aquí */}
      
      <CartWidget />
    </ul>
  );
}

export default NavBar;

