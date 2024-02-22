import React from 'react'

function soma(a,b){
    return a*b
}

const FirstComponents = () => {

    //8 - função de renderização
    const rederSomething = (x) => {
        if(x){
            return <h1>Renderizando isso!</h1>
        }else{
            return<h1>renderizando outra coisa</h1>
        }
    }
  return (
    <div>
        <div>
            <h1>
                Meu primeiro Componente
            </h1>
            <h2>{soma(5,6)}</h2>
        </div>
        <div>
            {/* joasdojsofasfajlkg */ }
            <label htmlFor="">
                asd{soma(5,6)}fasdf
            </label>
            gsdfgdfsg
        </div>
        {rederSomething(true)}
        {rederSomething(false)}
    </div>
  )
}

export default FirstComponents