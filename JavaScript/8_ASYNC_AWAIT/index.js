/*// 1 - setTimeout
console.log("Ainda não executou")

setTimeout(function(){
    console.log("Requisição assíncrona")
}, 3000)
console.log("Ainda não executou 2")

// 2 -setInterval

console.log("ainda não começou")

setInterval(function(){
    console.log("intervalo assíncrono")
},2000)
console.log("ainda não começou 2")

// 3 - Promises
const promessa = Promise.resolve(5 + 5)

console.log("algum codigo")

promessa.then((value) => {
    console.log(`A soma é ${value}`)
})

console.log("Outro codigo")

// 4 - Falha na promise
Promise.resolve(4*"asd")
.then((n) => {
    if(Number.isNaN(n)){
        throw new Error("Valores inválidos");
    };
})
.catch((err) => console.log(`Um Erro ocorreu: ${err}`))

// 5 - reject

function checkNumber(n){
    return new Promise((resolve,reject)=> {
        if(n > 10){
            resolve(`O numero é maior que 10`)
        }else{
            reject(new Error("numero muito baixo"))
        }
    })
}


const a  = checkNumber(15)

const b = checkNumber(9)

console.log(a)
console.log(b)

a.then((v)=> console.log(`O resultado é ${v}`)).catch((err) => console.log(`Um erro ocorreu: ${err}`))

// 6 - resolvendo varias promises

const p1 = new Promise ((resolve, reject) => {
    setTimeout(function () {
        resolve(10)
    },3000)
})

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve,reject) => {
    if(30 > 10){
        resolve(30);
    }else{
        reject("Erro")
    }
});

Promise.all([p1,p2,p3]).then((values) => console.log(values))

// 7 - async function

async function somar(a,b){
    return a + b
}

somar(2,4).then((value) => {
    console.log(`O valor da soma é: ${value}`)
})

console.log("teste async")


// 8 - Async Await

function resolveComDelay(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("resolveu a promise");
        }, 2000)
    });
}

async function chamadaAsync(){
    console.log("chamada a promise, e esperando o resultado")
    const resultado = await resolveComDelay();
    console.log(`O resultado chegou: ${resultado}`)
}

chamadaAsync()*/

//  9 - generators

function* generetors(){
    yield 1 
    yield 2
    yield 15
}
const gen = generetors()

console.log(gen.next().value);
console.log(gen.next().value);
console.log("kjhdsaj")
console.log(gen.next().value);
