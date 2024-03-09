import {useFetch} from "../hooks/useFetch"

import{useParams, Link} from "react-router-dom"


function Products() {

  const { id} = useParams();
  const url = "http://localhost:3001/products/" + id

  const {data: product} = useFetch(url)
  
  
 if(!product){return <p>...carregado</p>}

  return (
    <div> 
      <p>ID do produto: {id}</p>
      <h1>{product.name}</h1>
      <p>R${product.price}</p>
      {/* 8 - nested route*/}
      <Link to={`/products/${product.id}/info`}>Mais informaçoes</Link>
    </div>
  )
}

export default Products