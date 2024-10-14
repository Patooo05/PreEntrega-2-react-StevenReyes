import React, {useEffect, useState} from 'react';
import "../styles/Item.css"

const CounterWithState = () => {

    // La actualización de un estado desencadena un re-render
    const [count, setCount] = useState(0); // Inicializamos el estado count en 0

    // Este useEffect se ejecutará solo cuando se monte el componente (al principio)
    useEffect(() => {
        
    }, []);

    // Este useEffect se ejecutará cuando el valor de 'count' cambie
    useEffect(() => {
        
    }, [count]);

    // Función para incrementar el valor de count
    const onAdd = () => {
        setCount(prevState => prevState + 1); // Actualiza el estado sumando 1
    };
    const remove = () => {
        setCount(prevState => prevState - 1); // Actualiza el estado sumando 1
        setCount(prevState => Math.max(prevState - 1, 0)); // Se asegura que el count no baje de 0
    
    
    };

    return (
        <div>
            <span></span>
            <button onClick={remove}>-</button>
            <span style={{ color: 'white' }}>{count}</span>

            <button onClick={onAdd}>+</button> 
             
            
        </div>
    );
};

export default CounterWithState;
