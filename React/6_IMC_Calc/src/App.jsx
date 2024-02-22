import './App.css'
import {data} from "./Data/Data"
import ImcCalc from './components/ImcCalc'
import { useState } from 'react'
import ImcTable from './components/ImcTable'

function App() {

  const calcImc = (e, weigth, heigth)=>{
    e.preventDefault()

    if(!weigth || !heigth){
      alert("Por favor preenchar os formularios")
      return
    }
    const weigthFloat = +weigth.replace("," , ".")
    const heigthFloat = +heigth.replace("," , ".")
    
    const imcResult = (weigthFloat / (heigthFloat * heigthFloat)).toFixed(1)
    setImc(imcResult)
    data.forEach((item) => {
      if(imcResult >= item.min && imcResult <= item.max){
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    })
    if(!info)return
    
  }

  const resetCalc = (e) => {
    e.preventDefault()

    setImc("")
    setInfo('')
    setInfoClass('')
  }
  const  [imc, setImc]= useState('')
  const  [info, setInfo]= useState('')
  const  [infoClass, setInfoClass] = useState("")

  return (<div className='container'>{!imc ? <ImcCalc calcImc={calcImc}/> : <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc}/>}</div>
  )
}

export default App
