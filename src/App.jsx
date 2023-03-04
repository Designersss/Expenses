import {useContext, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Context} from "./main.jsx";
import {observer} from "mobx-react";

const App = observer(() => {
    const {user} = useContext(Context)
    const [addCash, setAddCash] = useState('')
    const [expenses, setExpenses] = useState(0)
    const [name, setName] = useState('')
    const [cash, setCash] = useState(user.cash)
    const addCashFunc = () => {
        setCash(user.cash += Number(addCash))
        setAddCash('')
    }
    const removeCashFunc = () => {
        setCash(user.cash -= Number(addCash))
        setAddCash('')
    }
    console.log(user.cash)
    return (
        <div className="App">
            <input type="text" value={addCash} onChange={e => setAddCash(e.target.value)} placeholder='Введите сумму'/>
            <button onClick={addCashFunc}>Добавить в кошелек</button>
            <button onClick={removeCashFunc}>Вычет</button>
            <div className='block mt-20'>
                {cash}
            </div>
        </div>
    )
})

// cash and expenses ??? +- ??? amount == cash || expenses

export default App
