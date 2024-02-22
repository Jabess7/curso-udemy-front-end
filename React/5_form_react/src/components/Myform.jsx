import Style from"./Myform.module.css"
import { useState } from "react"
import React from 'react'




function Myform() {
    const [name, setName] = useState('')
    const [ email, setEmail] = useState('')
    const [bio, setBio] = useState('')
    const [role, setRole] = useState("")

    const handleName = (e) => {
        e.preventDefault
        setName(e.target.value)


    };
    

//5-envio de form
const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name,email,bio, role);
    
    // 7 limpar p form
    setName("");
    setEmail("");
    setBio("")
    setRole("")
    
} 

    
  return (
    <div className={Style.container}>
        {/* 1 - formulario em react*/}
        {/*5 - Envio de formulario */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder="Digite o seu nome" required
                value={name || ""} onChange={handleName} />
            </div>
            {/*2 - label envolvendo input*/} 
            <label>
                <input type="text" name="email" placeholder="Digite o seu e-mail" id=""
                onChange={(e) => setEmail(e.target.value)} 
                value={email || ""}/>
            </label>  
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder="Digite uma mensagem" 
                value={bio}
                onChange={(e) => setBio(e.target.value)}></textarea>
            </label>

            <label>
                <span>Função no sistema</span>
                <select name="role" id="" onChange={(e) => setRole(e.target.value)} value={role} >
                    <option value="user">usuario</option>
                    <option value="adm">adm</option>
                    <option value="editor">editor</option>
                
                </select>
            </label>

                <input type="submit" value="Enviar" />
        </form>
    </div>
  )

  
}

export default Myform