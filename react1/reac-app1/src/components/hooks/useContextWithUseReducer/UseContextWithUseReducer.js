import React, { useReducer } from 'react'
import UseContextA from './UseContextA'
import UseContextB2 from './UseContextB2'
import UseContextC3 from './UseContextC3'

export const CountContext = React.createContext()

function UseContextWithUseReducer() {
  const initialCount = 0

  const reducer = (currState, action) => {
    switch (action) {
      case 'increment':
        return currState + 1
      case 'decrement':
        return currState - 1
      case 'reset':
        return initialCount
      default:
        return currState
    }
  }
  const [count, dispatch] = useReducer(reducer, initialCount)
  return (
    <CountContext.Provider value={{ count, dispatch }}>
      <div>Root</div>
      <div>{count}</div>
      <UseContextA />
      <UseContextB2 />
      <UseContextC3 />
    </CountContext.Provider>
  )
}

export default UseContextWithUseReducer
