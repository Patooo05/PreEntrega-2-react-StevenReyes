import { useState } from "react";


const Greeting = () => {

  const [count, setCount] = useState(0)
  

  const handleClick = () => {
    setCount(prevCount => prevCount + 1)
  }

  const handleClick2 = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <>
      
      <button onClick={handleClick}>Agregar</button>
      <button onClick={handleClick2}>Quitar</button>
      <span>{count}</span>
      
    </>
  );
};



export default Greeting;


