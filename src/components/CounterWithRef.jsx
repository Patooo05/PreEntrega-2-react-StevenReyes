import React, {useEffect, useRef}  from 'react'

import Styles from"../styles/counterwithref.module.css"




const CounterWithRef = () => {

    const refCount = useRef= (0 )
    useEffect(() => {

    },[] )

    const addCount = () => {
        refCount.current += 1

    }
  return (
    <div className={Styles["counter-container" ]}>
    <span>Counter With State</span>
    <br />
    <button onClick={onAdd}>Add 1</button>
    <span>{refCount.current}</span>
  </div>
  
  )
}

export default CounterWithRef