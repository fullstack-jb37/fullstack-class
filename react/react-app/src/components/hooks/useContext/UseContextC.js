import React from 'react'
import { CurrentUser, Notifications } from './UseContextA'

function UseContextC() {
  return (
    <CurrentUser.Consumer>
      {(user) => (
        <Notifications.Consumer>
          {(notifications) => (
            <div>
              Welcome back {user.name}! <br /> You got the following
              notifications:
              {notifications.map((not, index) => (
                <div key={index}>{not}</div>
              ))}
            </div>
          )}
        </Notifications.Consumer>
      )}
    </CurrentUser.Consumer>
  )
}

export default UseContextC
