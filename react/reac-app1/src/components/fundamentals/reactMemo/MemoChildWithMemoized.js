import { memo } from 'react'

function MemoChildWithMemoized({ title, releaseDate }) {
  console.log('child renders memoized')
  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
    </div>
  )
}

export default memo(MemoChildWithMemoized)
