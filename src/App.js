import React, { useState } from 'react'
import './App.css'
import Header from './components/header'

function App() {
  const [counter, setCounter] = useState(0)

  function increase() {
    setCounter(counter + 1)
  }

  function decrease() {
    setCounter(counter - 1)
  }

  return (
    <div>
      <div className="counter-body">
        <Header />
        <h2 className="App"> Counter:{counter}</h2>
        <div className="counter-div">
          <button onClick={increase} className="counter">
            Increase the counter
          </button>
          <button onClick={decrease} className="counter">
            decrease the counter
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
