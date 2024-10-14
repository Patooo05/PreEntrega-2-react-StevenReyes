import React, { useEffect, useState } from "react"; // Importar React y hooks
import mockProducts from "../assets/mockData.json"; // Importar datos de productos mock
import ItemList from "./ItemList"; // Importar componente que muestra la lista de productos
import { useParams } from "react-router-dom"; // Importar hook para obtener parámetros de la URL

const ItemListContainer = () => {
    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true); // Inicializar loading como true
    const { categoryId } = useParams(); // Obtener categoryId de los parámetros de la URL

    useEffect(() => {
        const promise1 = new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockProducts); 
            }, 2000); // Simular carga de datos
        });

        const getProducts = async () => {
            try {
                const products = await promise1; 
                console.log("All Products:", products); // Debugging: Mostrar todos los productos
                console.log("Category ID:", categoryId); // Debugging: Mostrar categoryId
                let productsFiltered;

                if (categoryId) {
                    productsFiltered = products.filter((product) => product.category === categoryId);
                    console.log("Filtered Products:", productsFiltered); // Debugging: Mostrar productos filtrados
                } else {
                    productsFiltered = products; 
                }

                setProducts(productsFiltered); 
                setLoading(false); 
            } catch (error) {
                console.error("Error fetching products:", error); 
                setLoading(false); 
            }
        };

        getProducts(); 
    }, [categoryId]); 

    if (loading) {
        return <p>Cargando productos...</p>; 
    }

    return <ItemList products={products} />; // Renderizar la lista de productos
}

export default ItemListContainer; // Exportar el componente
