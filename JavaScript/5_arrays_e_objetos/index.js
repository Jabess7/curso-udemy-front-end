/*// 1 arrays

const lista = [1,1,2,3,4,5,6]

console.log(lista)

console.log(typeof lista)
const itens = ['matheus',true,2,4.12, []]

console.log(itens)


// 2 -mais sobre arrays

const arr = ['a',"b","c","d","e"]

console.log(arr[0])
console.log(arr[4])

// 3 - propriedades

const numbers = [5,3,4];
console.log(numbers.length)
console.log(numbers)

//4 - métados

const otherNumbers = [1,2,3]

const allNumbers = numbers.concat(otherNumbers)


console.log(allNumbers.sort())

const text = "algum texto"

console.log(text.toUpperCase())


console.log(typeof text.toUpperCase())

console.log(text.indexOf("g"))



// 5 -Obejtos

const person = {
    name: "matheus",
    age: 31,
    job: "programador"
}

console.log(person)

console.log(person.name)

console.log(person.name.length)

console.log(typeof person.age)*/


/*//6 - criando e deletando propriedades

const car = {
    id: 1,
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
}

console.log(car.length)
console.log(car)

car.doors = 4;
console.log(car)

delete car.km
console.log(car)

// 7 - mais sobre objetos

const obj = {
    a: "teste",
    b: true,
};
console.log(obj instanceof Object)

const obj2 = {
    c: []
}

Object.assign(obj2, obj) 

console.log(obj2)

// 8 - conhecendo melhor os objetos

console.log(Object.keys(obj))
console.log(Object.keys(obj2))

console.log(Object.entries(car))


// 9 - Mutação

const a = {
    name: "Jabes"
}

const b = a

console.log(a)
console.log(b)
console.log(a === b)

a.age = 31

console.log(a)
console.log(b)

delete b.age
console.log(a)
console.log(b)


// 10 - loop Arrays

const users = ['matheus', "joao", "pedro", "miguel"]

for(let i = 0; i < users.length; i++){
    console.log(`listando o usuarios: ${users[i]}`)
}

// 11 - Métados de arrays - Push e Pop

const arrays = ["a","b","c",]

arrays.push("d")
console.log(arrays)

console.log(arrays.length)

arrays.pop(arrays)
console.log(arrays)

// 12 - mátados de arrays - Shift e Unshift

const letters = ["a","b","c"]


const letter = letters.shift();

console.log(letter)

console.log(letters)


letters.unshift("as","sdf","sdfas")

console.log(letters)


// 13 - indexof e lastIndexof

const myElements = ["morango", "maçã", "abacate", "pera", "abacate"]


console.log(myElements.indexOf('maçã'))
console.log(myElements.indexOf("abacate"))

console.log(myElements.lastIndexOf('abacate'))

// 14 - Slice

const testeSlice = ["a","b", "c", "d", "e", "f"]

const subArray = testeSlice.slice(2,4 +1);
console.log(subArray)
console.log(testeSlice)

const testeSlice2 = ["a","b","c","a","a","b","c",]
console.log(testeSlice2.slice(10,20))


// 15 - forEach

const nums = [1,2,4,5,3]

nums.forEach((numero) => {
    console.log(`O número é ${numero}`)
})


const posts = [
    {title: "Primeiro Post", category: "PHP"},
    {title: "Segundo Post", category: "JavaScript"},
    {title: "Terceiro Post", category: "Python"}

]


posts.forEach((post) => {
    console.log(`Exibindo post ${post.title}, da categoria: ${post.category}`)
})

posts.map((valor) => {
    console.log(`Altera valor ${valor.title}`)
})


// 15 - includes

const brads = ["BMW","VW","Fiat"]

console.log(brads.includes("BMW"))

if(brads.includes("BMW")){
    console.log("sim ")
}else{
    console.log("nao")
}

// 16 - Reverse

const reverseItens = [1,2,3,4,5]

reverseItens.reverse()
console.log(reverseItens)

// 18 - trim

const trimTest = "testando\nkljlkj"

console.log(trimTest)
console.log(trimTest.trim())

console.log(trimTest.trim().length)

// 19 - padStart

const testePadStart = "1"

const newNumbers = testePadStart.padStart(16,"jabes")

console.log(newNumbers)



// 20 - split

const  frase = "o rato roeu a roupa do rei de roma"

const arraysDaFrase = frase.split(" ")

console.log(arraysDaFrase)

// 21 - join
const metadoJoin = ["jabes","da","silva","alves"]

const unir = metadoJoin

console.log(unir.join(" "))

// 22 - repeat

const palavra = "testando "

console.log(palavra.repeat(5))


// 23 - rest operator

const somaInfinita = (...arfs) => {
    let total = 0

    for(let i = 0 ; i < arfs.length; i++){
        total += arfs[i];
    }

    return total
}

console.log(somaInfinita(1,2,3));

console.log(somaInfinita(1,20,34,34,5465465,654654654,56466556,515,-716587279))


// 24 - for ... of

const somaInfinita2 = (...args) => {
    let total = 0

    for(num of args){
        total += num;
    }

    return total;

}


console.log(somaInfinita2(5,5,455))

console.log(somaInfinita2(456654,64654,64556,))


// 25 - destructuring em objetos

const userDetails = {
    firstName: "jabes",
    lastName: "alves",
    job:"programador"
}

const {firstName,lastName,job} = userDetails

console.log(firstName,lastName,job)


// 26 - destructuring com arrays

const myList = ["avião", "Submarino", "Carro"]

const[veiculoA, veiculoB,veiculoC] = myList

console.log(veiculoA,veiculoB,veiculoC)

// 27 - JSON

const myJson = '{"name": "jabes", "age": 29, "skills":["PHP", "JAVASCRIPT", "PYTHON"]}'

console.log(myJson)

// 28 - JSON  para objetos e objetos para JSON

const myObject = JSON.parse(myJson)

console.log(myObject)


// Json invalido

const badJson = '{"name": "jabes", "age":31}'

const myBadJson = JSON.parse(badJson)

console.log(myBadJson)

const myNewJson = JSON.stringify(myObject)

console.log(myNewJson)

console.log(typeof myNewJson)*/
