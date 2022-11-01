import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers, postUsers } from '../../redux-async'

function Users() {
  const {
    emails,
    loading: getLoading,
    error: getError,
  } = useSelector((state) => state.getUsers)
  const {
    names,
    loading: postLoading,
    error: postError,
  } = useSelector((state) => state.postUsers)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [])
  return (
    <div>
      <div>{getLoading && 'Loading users...'}</div>
      <div>
        {emails.map((email, index) => (
          <h4 key={index}>{email}</h4>
        ))}
      </div>
      <div>{getError}</div>

      <div>{postLoading && 'Loading users...'}</div>
      <div>
        {names.map((name, index) => (
          <h4 key={index}>{name}</h4>
        ))}
      </div>
      <div>{postError}</div>
      <button onClick={() => dispatch(getUsers())}>Get Users</button>
      <button onClick={() => dispatch(postUsers([1, 2]))}>Post Users</button>
    </div>
  )
}

export default Users
