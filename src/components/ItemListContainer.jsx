import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);  // Estado para el indicador de carga
    const { categoryId } = useParams();

    useEffect(() => {
        // Función asincrónica para cargar productos
        const fetchProducts = async () => {
            setLoading(true);
            try {
                let productsFiltered = [];

                if (categoryId) {
                    const q = query(
                        collection(db, "products"),
                        where("category", "==", categoryId)
                    );
                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((doc) => {
                        productsFiltered.push({ id: doc.id, ...doc.data() });
                    });
                } else {
                    const querySnapshot = await getDocs(collection(db, "products"));
                    querySnapshot.forEach((doc) => {
                        productsFiltered.push({ id: doc.id, ...doc.data() });
                    });
                }
                setProducts(productsFiltered);
            } catch (error) {
                console.error("Error al cargar productos:", error);
            } finally {
                setLoading(false);  
            }
        };

        fetchProducts();
    }, [categoryId]);

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    return <ItemList products={products} />;
};

export default ItemListContainer;
