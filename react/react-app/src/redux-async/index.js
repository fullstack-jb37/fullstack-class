import { getUsers, postUsers } from './actions.js'
import store from './store.js'

const { dispatch, getState, subscribe } = store
subscribe(() => console.log(getState()))
// dispatch(getUsers())
// dispatch(postUsers([1, 2]))
export { store, getUsers, postUsers }
