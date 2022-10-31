import React, { useContext } from 'react'
import { CurrentUser, Notifications } from './UseContextA'

function UseContextD() {
  const user = useContext(CurrentUser)
  const notifications = useContext(Notifications)
  return (
    <div>
      Welcome back {user.name}! <br /> You got the following notifications:
      {notifications.map((not, index) => (
        <div key={index}>{not}</div>
      ))}
    </div>
  )
}

export default UseContextD
