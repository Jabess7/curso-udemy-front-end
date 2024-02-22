import './App.css'
import React from 'react';

// 2 imagem em assets
import nigth from "./assets/night.jpg"
import CarDetails from './components/CarDetails'
import CondicionalRender from './components/CondicionalRender'
import Container from './components/Container'

// 3-useState
import Data from './components/Data'
import ListerRender from './components/ListerRender'
import ShowUserName from './components/ShowUserName'

import ExecuteFunction from './components/ExecuteFunction'
import { useState } from 'react';
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage';


// 11 - renderizacao de lista
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

function App() {

  // 14 - funcao em prop
  function showMessage(){
    console.log("evento do componente pai")
  }

  // 15 - state Lift 

  const [message, setMessage]= useState("");

  const handleMessage = (msg) => {
    setMessage(msg)
    setTimeout(() => {
      setMessage("")
    }, 1000)
  }

  

  
  
  return (
    < >
     <div className='App' style={{ paddingBottom: "500px"}}>
       <div>
        <h1>Avançando em React</h1>
        {/* 1 - imagem em public*/ }
        <img src="/img.jpg" alt="imagem 1"  />
       
        {/* 2 - imagem em public*/ }
        <img src={nigth} alt="imagen 2"  />
        </div>
       
        {/* 3 - useState*/ }
        <Data/>

        {/* 4 - Renderização*/ }
        <ListerRender/>
        {/* 7 - render condicional*/}
        <CondicionalRender/>
        {/* 8 - Props*/}
        <ShowUserName name= " Jabes"/>

        {/*Desestruturação props */}
        <CarDetails brand={"GM"} km={999} color={"amarelo"}/>

        {/* 10 - Reaproveitando componentes*/}
        <CarDetails brand={"fiat"} km={11999} color={"azul"}/>
        <CarDetails color={"rosa"} km={11999}  brand={""}/>

        {/* 11 - renderizacao de lista */}
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} />
        ))}
        {/* 13 - children */}
        <Container>
          <h2>eu eu n</h2>
          <img src={nigth} alt="imagens3"  />
        </Container>

          {/* 14 - funcao em prop */}
        <ExecuteFunction myFunction={showMessage}/>

         {/* 15 - state lift */}
         <Message msg={message}/>
         <ChangeMessage handleMessage={handleMessage}/>


     </div>

    </>
  )
}

export default App
