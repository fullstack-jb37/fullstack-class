import React, { useReducer } from 'react'

function UseReducerBasics() {
  const initialState = 0
  const reducer = (currState, action) => {
    switch (action) {
      case 'increment':
        return currState + 1
      case 'decrement':
        return currState - 1
      case 'reset':
        return initialState
      default:
        return currState
    }
  }
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <button
        onClick={() => {
          dispatch('increment')
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch('decrement')
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch('reset')
        }}
      >
        Reset
      </button>
      <hr />
      {count}
    </div>
  )
}

export default UseReducerBasics
