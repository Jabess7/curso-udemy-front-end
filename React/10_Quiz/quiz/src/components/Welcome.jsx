import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import Quiz from "../img/quiz.svg"
import "./Welcome.css"


const Welcome = () => {

  

  
  return (
    <div id="welcome">
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar</p>
        <button>iniciar</button>
        <img src={Quiz} alt="Inicio do quiz" />
    </div>
  )
}

export default Welcome