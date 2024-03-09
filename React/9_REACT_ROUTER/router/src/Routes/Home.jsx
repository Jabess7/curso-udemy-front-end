import React from 'react'

// 6 carregamento de dados

import {useFetch} from "../hooks/useFetch"

const url = "http://localhost:3001/products"

// 7 - rota dinanmica
import{Link} from"react-router-dom"

function Home() {
  const {data: items} = useFetch(url);
 

  return (
    <div>
      <h1>Home</h1>
      <ul className='products'>
        {items &&
        items.map((item) => (
          
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            {/*7 - Rota dinamica */}
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
        
      </ul>
    
    </div>
  )
}

export default Home