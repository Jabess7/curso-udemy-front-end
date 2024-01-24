/*// 1 - criando uma função

function minhaFuncao(){
    console.log('testando');
};

minhaFuncao();
minhaFuncao();

const  minhaFuncaoEmVariavel = function() {
    console.log("função em variavel")
};
minhaFuncaoEmVariavel();

function funcaoComParanmentro(txt){
        console.log(`imprimindo: ${txt}`)
}

funcaoComParanmentro("imprimindo o que der na telha")

funcaoComParanmentro('1452223332')
funcaoComParanmentro("jkhkajlsfhas")

//2 - return

const  a = 10
const b = 20
const c = 30
const d = 40

function soma(n1,n2,n3){
    return( n1 + n2 / n3)
}

const resultado = soma(b,d,c)
console.log(Math.ceil(resultado))

// 3 - espoco da função

let y = 10

function testandoEspoco(){
    let y = 20
    console.log(`Y dentro da função é: ${y}`)
}

testandoEspoco()

console.log(`Y fora da função é ${y}`)

testandoEspoco()

// 5 - arrow function

const testArrow = () =>{
console.log('esta é uma função')

}

testArrow()

const parOuImpar = (n) => {
    if(n % 2 === 0){
        console.log("esse numero é par")
        
    }else{

    console.log("numero impar")}
}


parOuImpar(10)
parOuImpar(5)
parOuImpar(7)

// 6 - mais sobre arrow function

const raizQuadrada = (x) => {
    return x *x
}

console.log(raizQuadrada(9))


const raizQuadrada2 = (x) => x * x

console.log(raizQuadrada2(8))


// 7 - parâmetro opcional

const multiplication = function(m,n){
    if(n === undefined){
        return m*2;
    }else{
        return m * n
    }
}


console.log(multiplication(4))

console.log(multiplication(4,3))



const greeting = (name) =>{
    if(!name){
        console.log('ola')
        return
    }
    console.log(`ola, ${name}`)
}

greeting()
greeting("jabes")*/


// 8 valor default

/*const customGreeting = (name, gret = "ola") => {
    return `${gret}, ${name}`
}

console.log(customGreeting("matheus",))

console.log(customGreeting("joao", "boa tarde"))


const repeatText = (text, repeat = 2, index = 0) => {
    for( let i = 0; i < repeat; i++){
        console.log(text, index)
        index++
    }
}

repeatText("testando")

repeatText("vamos que vamos", 8)


//10 - mais sobre clousere




// 11 - recursion

const untilTen = (n, m) =>{
    if(n < 10){
        console.log("A função parou de executar!")
    }else{
        const x = n - m;
        console.log(x);
        untilTen(x, m)
    }
        
}

untilTen(100, 7);*/