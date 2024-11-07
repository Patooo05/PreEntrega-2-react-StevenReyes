import React, {useEffect, useState} from 'react';
import "../styles/Item.css"
import Styles from"../styles/counterwithref.module.css"

const CounterWithState = () => {

   
    const [count, setCount] = useState(0); 
    
    useEffect(() => {
        
    }, []);

   
    useEffect(() => {
        
    }, [count]);

    
    const onAdd = () => {
        setCount(prevState => prevState + 1); 
    };
    const remove = () => {
        setCount(prevState => prevState - 1); 
        setCount(prevState => Math.max(prevState - 1, 0)); 
    
    };

    return (
        <div  className={Styles["counter-container" ]}>
            <span></span>
            <button onClick={remove}>-</button>
            <span style={{ color: 'white' }}>{count}</span>

            <button onClick={onAdd}>+</button> 
             
            
        </div>
    );
};

export default CounterWithState;
