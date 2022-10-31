import { createStore, combineReducers, applyMiddleware } from 'redux'
import { creditCardReducer, currentAccountReducer } from './reducers.js'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

export default createStore(
  combineReducers({
    creditCardDebt: creditCardReducer,
    currentAccount: currentAccountReducer,
  }),
  composeWithDevTools(applyMiddleware(logger.createLogger()))
)
