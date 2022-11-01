import { useState, useEffect } from 'react'

const MouseCoordinates = () => {
  const eventHandler = (e) => {
    console.log('Listen!')
    setCoordinate({ x: e.clientX, y: e.clientY })
  }
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('In action')
    document.addEventListener('mousemove', eventHandler)

    return () => {
      document.removeEventListener('mousemove', eventHandler)
    }
  }, [])
  return (
    <div>
      <p>The x: {coordinate.x}</p>
      <p>The y: {coordinate.y}</p>
    </div>
  )
}

export default MouseCoordinates
