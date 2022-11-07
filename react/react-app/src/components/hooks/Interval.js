import { useEffect, useState } from 'react'

function Interval() {
  const intervalHandler = () => {
    setCount((prev) => prev + 1)
  }

  const [count, setCount] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(intervalHandler, 1000)

    return () => {
      console.log('Unmount')
      clearInterval(intervalId)
    }
  }, [])

  return <div>{count}</div>
}

export default Interval
