import { useEffect, useState } from 'react'
import {useFetch} from "./hooks/useFetch";

const url = ""

import './App.css'

function App() {
  //resgatando dados
  const [produto, setProduto] = useState([])

  //4 - custom hook
  const {data, httpConfig, loading, error} = useFetch(url)

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

  // 5-refatorando post

  httpConfig(product, "POST")
//   const res = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(product),
//   }
//   );
// // 3 - carregamento dinamico

// const addedProduct = await res.json()

// setProduto((prevProducts) => [...prevProducts, addedProduct])

limpar()

};


  return (
    <div className='App'>
      <h1>HTTP em React</h1>
      {/*6 - loading */}
      {/*7 - refatorando post */}
      {error  ? error && <p>{error}</p> :
     loading  ?  loading && <p>Carregando...</p> :     
      <ul>
        {data &&
        data.map((produto) => (
          <li key={produto.id}>{produto.name} - R$ {produto.price}</li>
        ))}
      </ul>}
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
          {/*<input type="submit" value="Enviar" />*/}
          {loading && <input type='submit' disabled value="Aguarde"></input>}
          {!loading && <input type='submit' value="Enviar"></input>}

          
        </form>

        
      </div>

    </div>  
)
}

export default App
