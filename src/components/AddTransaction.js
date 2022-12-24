import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext)

    const onsubmit = e => {
        e.preventDefault();

        const newtransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +amount
        }

        addTransaction(newtransaction);
    }

    return (
        <>
            <h3>Add new Tarnsaction</h3>

            <form onSubmit={onsubmit} action="">



                <div className='form-control'>

                    <label htmlFor="text">Text</label>

                    <input type="text" value={text}
                        onChange={(event) => setText(event.target.value)}
                        placeholder='Enter Here' />

                </div>




                <div className="form-control">

                    <label htmlFor="amount">
                        Amount
                        <br />
                        (negative - expense, positive-income)
                    </label>


                    <input type="number"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)} placeholder='Enter Rupees' />

                </div>



                <button className='btn'>Add Transaction</button>

            </form>

        </>
    )
}
