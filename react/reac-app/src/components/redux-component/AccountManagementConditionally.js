import React from 'react'
import { withdrawMoney, payWithCreditCard } from '../../redux/'
import { connect } from 'react-redux'

function AccountManagementConditinally({ amount, action }) {
  return (
    <div>
      <div>Amount: {amount}</div>
      <button onClick={action}>Action</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { amount } = ownProps.creditCardDebt
    ? state.creditCardDebt
    : state.currentAccount
  return { amount }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.creditCardDebt
    ? () => dispatch(payWithCreditCard())
    : () => dispatch(withdrawMoney())
  return { action }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountManagementConditinally)
