import React from 'react'
import useCounter from './useCounter'

function Counter() {
  const [counter, resetCounter, incCounter, decCounter] = useCounter({
    initialValue: 0,
    resetTo: -28,
    incBy: 4,
    decBy: 2,
  })
  return (
    <div>
      <button onClick={() => incCounter()}>Increment</button>
      <button onClick={() => decCounter()}>Decrement</button>
      <button onClick={() => resetCounter()}>reset</button>
      <div>{counter}</div>
    </div>
  )
}

export default Counter
