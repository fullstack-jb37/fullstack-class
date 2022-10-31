import toolkit from '@reduxjs/toolkit'
import { initialCreditCard } from '../states.js'
import { currentAccountActions } from './currentAccountSlice.js'

const { createSlice } = toolkit

const creditCardSlice = createSlice({
  name: 'creditCard',
  initialState: initialCreditCard,
  reducers: {
    payWithCreditCard: (state, action) => {
      state.amount += action.payload
    },
    creditCardVip: (state) => {
      state.creditCardDetails.vip = true
    },
  },
  extraReducers: (builder) => {
    builder.addCase(currentAccountActions.withdrawMoney, (state) => {
      state.creditCardDetails.activeBankAccount = true
    })
  },
})

const creditCardReducer = creditCardSlice.reducer
const creditCardActions = creditCardSlice.actions
export { creditCardReducer, creditCardActions }
