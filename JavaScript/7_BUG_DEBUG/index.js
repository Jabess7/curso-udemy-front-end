/*// 1 - Strict
"use Strict"

opa = "teste"

// 2 - console.log

let a = 1
let b = 2

if(a == 1){
    a = b +2
}

console.log(a)

for(let i = 0; i < b ; i++){
    a = a + 2
    console.log(a)
}

if(a > 5){
    a = 25
}

console.log(a)

// 3 - debugger

let c = 1
let d = 2
if(c == 1){
    c = d + 2;
}

debugger;

for(let i = 0; i < d ; i++){
    c = c + 2
}
console.log("executou o loop")

debugger;
if(c > 5){
    c = 25
}*/

// 4 -tratamento de dados

function checkNumber(n){
    const result = Number(n)

    if(Number.isNaN(result)){
        console.log("valor incorreto");
        return
    }
    console.log("Valor correto")
        return result;

}


checkNumber(5)
checkNumber(" d")
checkNumber({})
checkNumber("dsa")


/*// 5 - exceptions

let x = 10

if( x != 11){
    throw new Error('O valor de x não pode ser diferente de 11!')

}*/

// 6 - TRY CATCH

try{
    const soma = x + y;
}catch(error){
    console.log(`Erro no programa: ${error}!`)
}


// 7 - FINALLY

try{
    const value = checkNumber("asd");

    if(!value){
        throw new Error("valores invalidos")
    }
} catch(error){
    console.log(`opa, aconteceu um erro: ${error}`)
}

// 8 - assertion
function checkArray(arr){
    if(arr.length === 0){
        throw new Error("O array precisa ter elementos");
    }else {
        console.log(`O array tem ${arr.length} elementos`)
    }

}

//checkArray([])

checkArray([1,23,25])