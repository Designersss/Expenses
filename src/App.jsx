import {useContext, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Context} from "./main.jsx";
import {user} from "./store/userStore.js";
import Trans from "./components/Trans.jsx";

const App = () => {
    const {user} = useContext(Context)
    const [addCash, setAddCash] = useState('')
    const [expenses, setExpenses] = useState(0)
    const [name, setName] = useState('')
    const [cash, setCash] = useState(user.cash)
    const [amount, setAmount] = useState(user.transaction)
    const transactions = {
        id: Math.random().toString(36).substr(2, 9) + 1, amount: 0
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
        transactions.amount = '-' + Number(addCash)
        setCash(user.cash -= Number(addCash))
        setAddCash('')
        amount.push(transactions)
        console.log(amount)
    }
    return (<div className="flex justify-center mt-12">
            <div>
                <div className='flex justify-center'>
                    {user.cash}
                </div>
                <div className='mt-5'>
                    <input className='border-2 px-5' type="text" value={addCash} onChange={e => setAddCash(e.target.value)}
                           placeholder='Введите сумму'/>
                </div>
                <div className='flex mt-5 justify-between'>
                    <button className='border-2 rounded-lg p-2' onClick={addCashFunc}>Добавить в кошелек</button>
                    <button className='border-2 rounded-lg p-2' onClick={removeCashFunc}>Вычет</button>
                </div>
                <div className='block mt-20'>
                    {amount.map(cash => <Trans trans={cash}/>)}
                </div>
            </div>
        </div>)
}

// cash and expenses ??? +- ??? amount == cash || expenses

export default App
