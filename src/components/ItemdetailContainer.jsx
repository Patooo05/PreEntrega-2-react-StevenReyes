import React, { useEffect, useState } from 'react';
import products from '../assets/mockData.json';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';




const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null); 
  const { id } = useParams(); 

  
useEffect(() => {
  products.forEach((product) => {
    console.log('Producto:', product);
  });
}, []);

  useEffect(() => {
    // Buscamos el producto que coincide con el ID de la URL
    const product = products.find(productToFind => productToFind.id === Number(id));

      setProduct(product)
    },[id])
  
  if (!product) return <p>Cargando producto...</p>;

  return < ItemDetail product={product} />; // Renderizamos 
};

export default ItemDetailContainer;
