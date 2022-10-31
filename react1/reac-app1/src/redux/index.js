import { withdrawMoney, payWithCreditCard } from './actions.js'
import store from './store.js'

const { subscribe, getState, dispatch } = store
const unsubscribe = subscribe(() => {})
// dispatch(withdrawMoney(3))
// dispatch(payWithCreditCard(6))
unsubscribe()

export { store, withdrawMoney, payWithCreditCard }
