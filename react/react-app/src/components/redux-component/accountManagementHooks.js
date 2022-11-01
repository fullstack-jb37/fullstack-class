import React from 'react'
import { withdrawMoney, payWithCreditCard } from '../../redux/'
import { useSelector, useDispatch } from 'react-redux'

function AccountManagementHooks() {
  const { amount: creditCardDebtAmount } = useSelector(
    (state) => state.creditCardDebt
  )
  const { amount: currentAccountAmount } = useSelector(
    (state) => state.currentAccount
  )
  const dispatch = useDispatch()
  return (
    <div>
      <div>Credit card debt: {creditCardDebtAmount}</div>
      <div>Current account: {currentAccountAmount}</div>
      <button onClick={() => dispatch(withdrawMoney())}>Withdraw Money</button>
      <button onClick={() => dispatch(payWithCreditCard())}>
        Pay With credit card
      </button>
    </div>
  )
}

export default AccountManagementHooks
