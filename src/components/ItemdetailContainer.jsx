import React, { useEffect, useState } from 'react';
import products from '../assets/mockData.json';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';




const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null); // Estado del producto
  const { id } = useParams(); // Obtenemos el ID de la URL
  

  
useEffect(() => {
  products.forEach((product) => {
    console.log('Producto:', product);
  });
}, []);

  useEffect(() => {
    // Buscamos el producto que coincide con el ID de la URL
    const foundProduct = products.find(
      (productToFind) => productToFind.id === Number(id)
    );

    setProduct(foundProduct); // Actualizamos el estado
  }, [id]); // Este useEffect se ejecuta cada vez que cambia el ID

  if (!product) return <p>Cargando producto...</p>; // Control de carga

  return < ItemDetail product={product} />; // Renderizamos el detalle del producto
};

export default ItemDetailContainer;
