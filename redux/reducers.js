import { PAY_WITH_CREDIT_CARD, WITHDRAW_MONEY } from './types.js'
import initialState from './states.js'

export default (state = initialState, action) => {
  const { type, amount } = action
  switch (type) {
    case PAY_WITH_CREDIT_CARD:
      return {
        ...state,
        initialCreditCardDebt: {
          amount: state.initialCreditCardDebt.amount + amount,
        },
      }
    case WITHDRAW_MONEY:
      return {
        ...state,
        initialCurrentAccount: {
          amount: state.initialCurrentAccount.amount - amount,
        },
      }

    default:
      return state
  }
}
