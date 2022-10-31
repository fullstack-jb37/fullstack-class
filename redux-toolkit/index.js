import store from './store.js'
import { creditCardActions } from './features/creditcardSlice.js'
import { currentAccountActions } from './features/currentAccountSlice.js'
import { fetchUsers } from './features/usersSlice.js'

const { withdrawMoney } = currentAccountActions
const { payWithCreditCard, creditCardVip } = creditCardActions

const { subscribe, dispatch } = store

subscribe(() => {})
// dispatch(withdrawMoney(3))
// dispatch(payWithCreditCard(4))
// dispatch(creditCardVip())
dispatch(fetchUsers())
