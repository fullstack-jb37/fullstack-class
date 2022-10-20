import { WITHDRAW_MONEY, PAY_WITH_CREDIT_CARD } from './types.js'

const withdrawMoney = {
  type: WITHDRAW_MONEY,
  amount: 2,
}

const payWithCreditCard = {
  type: PAY_WITH_CREDIT_CARD,
  amount: 3,
}

export { withdrawMoney, payWithCreditCard }
