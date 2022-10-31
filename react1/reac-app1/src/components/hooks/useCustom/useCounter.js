import { useState } from 'react'

function useCounter({ initialValue, resetTo, incBy, decBy }) {
  const [counter, setCounter] = useState(initialValue)

  const reset = () => setCounter(resetTo)
  const increment = () => setCounter(counter + incBy)
  const decrement = () => setCounter(counter - decBy)

  return [counter, reset, increment, decrement]
}

export default useCounter
