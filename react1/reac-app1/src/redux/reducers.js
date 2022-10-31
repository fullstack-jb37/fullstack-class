import { PAY_WITH_CREDIT_CARD, WITHDRAW_MONEY } from './types.js'
import { creditCardDebt, currentAccount } from './states.js'

export const creditCardReducer = (state = creditCardDebt, action) => {
  const { type, amount } = action
  switch (type) {
    case PAY_WITH_CREDIT_CARD:
      return {
        amount: state.amount + amount,
      }
    default:
      return state
  }
}

export const currentAccountReducer = (state = currentAccount, action) => {
  const { type, amount } = action
  switch (type) {
    case WITHDRAW_MONEY:
      return {
        amount: state.amount - amount,
      }

    default:
      return state
  }
}
