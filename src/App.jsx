import {useContext, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Context} from "./main.jsx";

function App() {
  const {user} = useContext(Context)
  console.log(user)
  return (
    <div className="App">
    </div>
  )
}

export default App
