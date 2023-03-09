import {useContext, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Context} from "./main.jsx";
import {user} from "./store/userStore.js";

const App = () => {
    const {user} = useContext(Context)
    const [addCash, setAddCash] = useState('')
    const [expenses, setExpenses] = useState(0)
    const [name, setName] = useState('')
    const [cash, setCash] = useState(user.cash)
    const [amount, setAmount] = useState(user.transaction)
    const transactions = {
        id: Math.random().toString(36).substr(2, 9) + 1,
        amount: 0
    }
    const addCashFunc = () => {
        transactions.amount = Number(addCash)
        setCash(user.cash += Number(addCash))
        setAddCash('')
        amount.push(transactions)
        console.log(amount)
    }
    console.log(user)
    const removeCashFunc = () => {
        setCash(user.cash -= Number(addCash))
        setAddCash('')
    }
    return (
        <div className="App">
            <div className='block'>
                {user.cash}
            </div>
            <input type="text" value={addCash} onChange={e => setAddCash(e.target.value)} placeholder='Введите сумму'/>
            <button onClick={addCashFunc}>Добавить в кошелек</button>
            <button onClick={removeCashFunc}>Вычет</button>
            <div className='block mt-20'>
                {amount.map(cash =>
                    <div key={cash.id}> {cash.amount}</div>
                )}
            </div>
        </div>
    )
}

// cash and expenses ??? +- ??? amount == cash || expenses

export default App
