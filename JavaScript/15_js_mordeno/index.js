// 1 - var, let e const
var x = 10
var y = 15


if(y > 10){
    var x =5 
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if(a > 15){
    let a = 5
    console.log(a)
}

console.log(a)

const name = "jabes"

function name1(){
    const name = "joao"
    console.log(name)
}

console.log(name)

name1()

// 2 - Arrow Function

/*const sum = function(a,b){
    return a + b
}

const arrowSum = (a,b) => a+b

console.log(sum(5,8))

console.log(arrowSum(8,5))

const greeting = (name) => {
    if(name){
        return `Hello ${name}`
    }else{
        return `Hello`
    }

};

console.log(greeting("jabes"))
console.log(greeting())


const user = {
    name: "theo",
    sayUserName() {
        setTimeout(function jse () {
            console.log(this);
            console.log(`Username: ${this.name}`);
        },1000)
    },
    sayUserNameArrow(){
        setTimeout(() => {
            console.log(this);
            console.log(`Username: ${this.name}`);
        },2000)
    },
};

user.sayUserName()

user.sayUserNameArrow()*/


// 3 Filter

const arr = [1,2,3,4,5,6]

const higthNumbers = arr.filter((n) => {
    if(n >= 3){
        return n;
    }
});

console.log(higthNumbers)

const user = [
    {name: "Matheus", available: true },
    {name: "Joao", available: false },
    {name: "maria", available: false },
    {name: "eu eu mesmo", available: true },
    {name: "kleber", available: true },

]

const availableUsers = user.filter((user) => user.available)

console.log(availableUsers)

// 4 - MAP

const products = [
    {name:"camisa", price: 10.99, caregory: "Roupas"},
    {name:"Chaleira Elétrica", price: 150, caregory: "Eletro"},
    {name:"Fogão", price: 499 , caregory: "Eletro"},
    {name:"Calça Jeans", price: 87.99, caregory: "Roupas"}
]


products.map((product) => {
    if(product.caregory === "Roupas"){
        product.onSale = true
    }
})

console.log(products)

// 5 - Template literals

const userName = "jabes"

const age = 29

console.log(`o ${userName} tem ${age} anos`)

// 6 destructuring

const fruits = ["Maçã", "Mamão", "Laranja"];

const [f , g,h] = fruits

console.log(f,h)

// 7 Spread operator

const a1 = [2,3]
const a2 = [4,5,6]

const a3 = [...a2 , ...a1]

console.log(a3.sort())

console.log(a3.push(10,22,85))

console.log(a3.sort())

const ordenar = a3.sort((a,b) => a - b)

console.log(ordenar)
