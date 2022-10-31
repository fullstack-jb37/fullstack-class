import React, { useState } from 'react'
import Parent from './Parent'

function ParentChanger() {
  const [views, setViews] = useState(0)

  return (
    <div>
      <button onClick={() => setViews(views + 1)}>Increase Viewers</button>
      {views % 5 ? (
        <Parent views={views} title={'Avengers'} releaseDate={'2012'} />
      ) : (
        <Parent views={views} title={'Devided by 5'} releaseDate={'2012'} />
      )}
    </div>
  )
}

export default ParentChanger
