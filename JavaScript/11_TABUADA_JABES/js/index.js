//selecionando elementos
const tabuadaDo = document.querySelector("#number")
const multiplicaAte = document.querySelector("#multiplicator")
const botaoCalucar = document.querySelector('#calcular')

const resultado = document.querySelector('.resultado')

const idicador = document.querySelector("#multiplication-title span")
const containerResult = document.querySelector(".multiplication-operations")

// eventos
botaoCalucar.addEventListener('click', (e) => {
    
    const valorTabuada = tabuadaDo.value
    const valorMultiplicaAte = multiplicaAte.value
    

    if(!valorTabuada || !valorMultiplicaAte){
        window.alert("voce precisa informar o valor")
        return
    }
    containerResult.innerText = " "; 
    debugger
    multiplicar(valorTabuada,valorMultiplicaAte);
    
})

// funçoes

function multiplicar(a,b){ 
    debugger  

    for( let i = 1; i <= b; i++){
        let result = a * i
        resultado.innerHTML += `<div class="row">
        <div class="operation">${a} x ${i} = </div>
        <div class="result">${result}</div>
        </div>`
    }
    debugger
    idicador.innerText = `${a}`
    
    }

