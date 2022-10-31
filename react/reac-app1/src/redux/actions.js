import { WITHDRAW_MONEY, PAY_WITH_CREDIT_CARD } from './types.js'

export const withdrawMoney = (amount = 1) => {
  return {
    type: WITHDRAW_MONEY,
    amount,
  }
}

export const payWithCreditCard = (amount = 1) => {
  return {
    type: PAY_WITH_CREDIT_CARD,
    amount,
  }
}
