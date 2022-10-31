import React, { useContext } from 'react'
import { CountContext } from './UseContextWithUseReducer'

function UseContextC3() {
  const { count, dispatch } = useContext(CountContext)
  return (
    <div>
      <div>UseContextC3</div>
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
      <div>{count}</div>
    </div>
  )
}

export default UseContextC3
