import { useEffect, useState } from 'react'
import {useFetch} from "./hooks/useFetch";

const url = "http://localhost:3001/products"

import './App.css'

function App() {
  //resgatando dados
  const [produto, setProduto] = useState([])

  //4 - custom hook
  const {data: items} = useFetch(url)

 /*useEffect(() => {
  async function getData(){
    const res = await fetch(url)
    const data = await res.json()

    setProduto(data)
  }
  getData();
 }, [])
*/

//limpar
const limpar = () =>{
  setName('')
  setPrice('')
};

 // 2 - envios de dados
 const [name,setName] = useState('')
 const [price, setPrice] = useState('')

 const handleSubmit = async (e) => {
  e.preventDefault();
  const product={
    name,
    price
    
  };
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(product),
  }
  );
// 3 - carregamento dinamico

const addedProduct = await res.json()

setProduto((prevProducts) => [...prevProducts, addedProduct])

limpar()

};


  return (
    <div className='App'>
      <h1>HTTP em React</h1>
      {/*1 - resgate de dados  */}
      <ul>
        {items &&
        items.map((produto) => (
          <li key={produto.id}>{produto.name} - R$ {produto.price}</li>
        ))}
      </ul>
      {/*2 - Enviando dados */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label >
            <span>Nome</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            <span>Preço</span>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Enviar" />
          
        </form>

        
      </div>

    </div>  
)
}

export default App
