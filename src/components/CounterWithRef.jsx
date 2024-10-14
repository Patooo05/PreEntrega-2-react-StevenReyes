import React, {useEffect, useRef}  from 'react'

const CounterWithRef = () => {

    const refCount = useRef= (0 )
    useEffect(() => {

    },[] )

    const addCount = () => {
        refCount.current += 1

    }
  return (
    <div>
      <span>Counter With State</span>
      <button onClick={onAdd}>Add 1</button> 
      <span>{refCount.current}</span> 
    </div>
  )
}

export default CounterWithRef