import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const Balance = () => {

  const { transactions } = useContext(GlobalContext)

  //creating array of amounts
  const amounts = transactions.map(transaction => transaction.amount);

  //reducing amounts to get sum

  const total = amounts.reduce((accumalator, setitem) => (accumalator + setitem), 0).toFixed(2);



  return (
    <div>
      <h4>Your Balance</h4>
      <h1>₹{total}</h1>
    </div>
  )
}
