import { withdrawMoney, payWithCreditCard } from './actions.js'
import store from './store.js'

const { subscribe, getState, dispatch } = store
subscribe(() => console.log(getState()))
dispatch(withdrawMoney)
dispatch(payWithCreditCard)
