import toolkit from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { creditCardReducer } from './features/creditcardSlice.js'
import { currentAccountReducer } from './features/currentAccountSlice.js'
import { usersReducer } from './features/usersSlice.js'

const { configureStore } = toolkit

export default configureStore({
  reducer: {
    creditCard: creditCardReducer,
    currentAccount: currentAccountReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger.createLogger()),
})
