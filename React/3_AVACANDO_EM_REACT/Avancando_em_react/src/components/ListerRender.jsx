import React, { useState } from 'react'


const ListerRender = () => {
    const nomes = ["jabes", "kleber", "renato", "matheus"]

    const [users, setUsers] = useState([
        {id: 1, name: "joao", age: 50},
        {id: 2, name: "eu", age: 80},
        {id: 3, name: "você", age: 40},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        debugger

        setUsers((prevUsers)  => prevUsers.filter((user) => randomNumber !== user.id)
        );
        
        debugger
    };
  return (
    <div>
        {/*render sem key*/}
        <ul>
            {nomes.map((nome, i) => (
                <li key= {i}>{nome}</li>
            ))}
        </ul>

        {/*render com key*/}
        <ul>
            {users.map((use) => (
                <li key={use.id}>{use.name} - {use.age}</li>
            ))}
        </ul>
                {/*5 - Previous state*/}

                <button onClick={deleteRandom} >Deletar nome</button>

    </div>
  )
}

export default ListerRender