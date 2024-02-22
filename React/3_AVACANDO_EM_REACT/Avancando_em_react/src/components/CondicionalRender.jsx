import React from 'react'

function CondicionalRender() {
    const x = false
    const nome = ""
    return (
    <div>
        {/* 7 - render condicional*/}
        <h3>Isso será exibido ?</h3>
        {x && <p>Se x for true sim!</p>}
        {/* else*/}
        <h3>render ternario</h3>
        {nome === "joao" ? (
            <div>
                <p>Olá, Joao</p>
            </div>
        ):(
            <div>
                <p>não tem nome </p>
            </div>
        ) }

    </div>
  )
}

export default CondicionalRender