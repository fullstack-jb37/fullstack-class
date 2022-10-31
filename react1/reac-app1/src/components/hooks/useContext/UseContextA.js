import React from 'react'
import UseContextB from './UseContextB'

export const CurrentUser = React.createContext()
export const Notifications = React.createContext()

function UseContextA() {
  return (
    <CurrentUser.Provider value={{ name: 'Yossi' }}>
      <Notifications.Provider value={['message', 'push from N12']}>
        <div>
          <UseContextB />
        </div>
      </Notifications.Provider>
    </CurrentUser.Provider>
  )
}

export default UseContextA
