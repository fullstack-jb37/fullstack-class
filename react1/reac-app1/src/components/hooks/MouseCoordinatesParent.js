import { useState } from 'react'
import MouseCoordinates from './MouseCoordinates'

const MouseCoordinatesParent = () => {
  const [display, setDisplay] = useState(true)
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      <div>{display && <MouseCoordinates />}</div>
    </div>
  )
}

export default MouseCoordinatesParent
