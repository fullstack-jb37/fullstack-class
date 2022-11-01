import React, { useState, useMemo } from 'react'

function UseMemoSample() {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  const isOdd = useMemo(() => {
    let i = 0
    while (i < 10 ** 9) i++
    return counter1 % 2
  }, [counter1])
  return (
    <div>
      <div>Counter1 - {counter1}</div>
      <div> {isOdd ? 'odd' : 'even'}</div>
      <div>Counter2 - {counter2}</div>
      <button
        onClick={() => {
          setCounter1(counter1 + 1)
        }}
      >
        Increase counter1
      </button>
      <button
        onClick={() => {
          setCounter2(counter2 + 1)
        }}
      >
        Increase counter2
      </button>
    </div>
  )
}

export default UseMemoSample
