import React from 'react'

function CarDetails({brand, km, color}) {
  return (
    <div>
        <p>Marca: {brand}</p>
        <p>KM: {km}</p>
        <p>Cor: {color}</p>
    </div>
  )
}

export default CarDetails