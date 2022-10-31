import React from 'react'
import { withdrawMoney, payWithCreditCard } from '../../redux/'
import { connect } from 'react-redux'

function AccountManagement({
  creditCardDebtAmount,
  currentAccountAmount,
  withdrawMoney,
  payWithCreditCard,
}) {
  return (
    <div>
      <div>Credit card debt: {creditCardDebtAmount}</div>
      <div>Current account: {currentAccountAmount}</div>
      <button onClick={withdrawMoney}>Withdraw Money</button>
      <button onClick={payWithCreditCard}>Pay With credit card</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { amount: creditCardDebtAmount } = state.creditCardDebt
  const { amount: currentAccountAmount } = state.currentAccount
  return {
    creditCardDebtAmount,
    currentAccountAmount,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    withdrawMoney: () => dispatch(withdrawMoney()),
    payWithCreditCard: () => dispatch(payWithCreditCard()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountManagement)
