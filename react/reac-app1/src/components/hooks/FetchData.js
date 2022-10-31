import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchData() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState('')

  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true)
        const res = await axios.get('http://localhost:3000')
        setIsLoading(false)
        setErrors('')
        setUsers(res.data)
      } catch (error) {
        setIsLoading(false)
        setErrors(error.message)
        setUsers([])
      }
    }
    fetchUsers()
  }, [])
  return (
    <div>
      <div>{isLoading && 'Loading...'}</div>
      <div>{errors}</div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Full Name: {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FetchData
