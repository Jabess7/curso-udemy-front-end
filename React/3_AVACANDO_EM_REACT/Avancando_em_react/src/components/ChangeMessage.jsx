import React from 'react'

function ChangeMessage({handleMessage}) {
    const messagens =["oi","olá", "tudo bem"]
  return (
    <div>
        <button onClick={() => handleMessage(messagens[0])}>
            1
        </button>
        <button onClick={() => handleMessage(messagens[1])}>
            2
        </button>
        <button onClick={() => handleMessage(messagens[2])}>
            3
        </button>
    </div>
  )
}

export default ChangeMessage