import toolkit from '@reduxjs/toolkit'
import { initialCurrentAccount } from '../states.js'
const { createSlice } = toolkit

const currentAccountSlice = createSlice({
  name: 'currentAccount',
  initialState: initialCurrentAccount,
  reducers: {
    withdrawMoney: (state, action) => {
      state.amount -= action.payload
    },
  },
})

const currentAccountReducer = currentAccountSlice.reducer
const currentAccountActions = currentAccountSlice.actions

export { currentAccountReducer, currentAccountActions }
