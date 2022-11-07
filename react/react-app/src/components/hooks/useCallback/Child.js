import { memo } from 'react'

function Child({ title, releaseDate, generateAction }) {
  console.log('child renders memoized')
  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
      <div>{generateAction()}</div>
    </div>
  )
}

export default memo(Child)
