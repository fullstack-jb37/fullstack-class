import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { getUsersReducer, postUsersReducer } from './reducers.js'

export default createStore(
  combineReducers({
    getUsers: getUsersReducer,
    postUsers: postUsersReducer,
  }),
  applyMiddleware(thunk)
)
