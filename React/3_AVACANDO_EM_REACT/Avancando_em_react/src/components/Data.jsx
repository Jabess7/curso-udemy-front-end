import React from 'react'
import { useState } from 'react'

const Data = () => {

    let someData = 10
    const [anotherNumber, setAnotherNumber] = useState(10)

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => {someData = 15}}>Mudar variavel</button>
            <p>valor: {someData}</p>
        </div>
        <div>
            <p>valor: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(20)}>modifica valor </button>
        </div>
    </div>
  )
}

export default Data