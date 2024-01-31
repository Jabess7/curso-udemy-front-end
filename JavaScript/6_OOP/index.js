/*// 1 - métados
const animal = {
    name:"bob",
    latir: (nome) => {
        console.log(nome)
    }
}


console.log(animal.name)
console.log(animal.latir)
animal.latir("joao bunda")

// 2 - aprofundando em metados 

const pessoa = {
    nome: "jabes",
    getnome: function(){
        return this.nome
    },
    setNome: function(novoNome){
        this.nome = novoNome;
    }

};

console.log(pessoa.nome);

console.log(pessoa.getnome());

pessoa.setNome("joaquim");


console.log(pessoa.getnome());



// 4 - mais sobre prototype

const myObject = {
    a: "b",
}

const mySecondObject = Object.create(myObject)

console.log(mySecondObject)


// 5 - classes basicas

const cachorro = {
    raca: null,
    patas: 4,
};

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor alemão";

console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro)

bulldog.raca = "bulldog"

console.log(bulldog)


// 6 - função com classe - função construtora

function criandoCachorro(nome,raca){
    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro

}


console.log(criandoCachorro("bob", "Pitbull"))
console.log(criandoCachorro("joao", "golden"))

// 7 - funçoes como classe
function Cachorro(nome,raca){
    this.nome = nome;
    this.raca = raca;
};
const golden = new Cachorro('Estrela', "Golden");

console.log(golden);

// 8 - metodos na função construtora

Cachorro.prototype.uivar = function(){
    console.log("Auuuuuuu!");
};


console.log(Cachorro.prototype)
golden.uivar

console.log(golden.uivar)

// 9 - classes es6
class CachorroClasse{
    constructor(nome,raca){
        this.nome = nome;
        this.raca = raca;

    }
}

const jeff = new CachorroClasse("jeff", "labrador")

console.log(jeff)

console.log(Object.getPrototypeOf(jeff))

// 10- mais sobre classe

class Caminhao{
    constructor(eixos, cor){
        this.eixos = eixos;
        this.cor = cor;
    }
    descrevenrCaminhao(){
        console.log(`Este caminão tem ${this.eixos} eixos e é da cor ${this.cor}`);
    }

}

const scania = new Caminhao(6,"vermelho")

console.log(scania);
scania.descrevenrCaminhao();

Caminhao.motor = 4;

const c2 = new Caminhao(4,"Preta");
console.log(c2);

// 11 - override

class Humano{
    constructor(nome ,idade){
        this.nome  = nome ;
        this.idade = idade;
    }
}

const jabes = new Humano("Jabes", 29)

console.log(jabes)

Humano.prototype.idade = "Não definida";

console.log(jabes.idade)

Humano.prototype.nome = "Jose tiao"
console.log(Humano.prototype.nome)

const eu = new Humano("eu mesmo",21)

console.log(Humano)*/


//12 - symbol

class Aviao{
    constructor(marca,turbinas){
        this.marca = marca;
        this.turbinas = turbinas;
    }
}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2
Aviao.prototype[pilotos] = 3

const boeing = new Aviao("Boeing", 10)

console.log(boeing)

// 13 - Getters e Setters

class Post{
    constructor(titulo, descrisao, tags){
        this.titulo = titulo
        this.descrisao = descrisao
        this.tags = tags
    }

    get exibirTitulo(){
        return `Voce esta Lendo ${this.titulo}`;
    }
    set adicionarTags(tags){
        const tagsArrays = tags.split(", ")
        this.tags = tagsArrays
    }
}

const myPost = new Post("algum post", "é um post sobre programação")

console.log(myPost.exibirTitulo)

myPost.adicionarTags = "programação, javaScript, js"

console.log(myPost)

// 14 - Herança

class Mamifero{
    constructor(patas){
        this.patas = patas
    }
}

class Lobo extends Mamifero{
    constructor(patas, nome){
        super(patas, patas)
        this.nome = nome;
    }
}

const shark = new Lobo(4, "Shark")

console.log(shark)

// 15 - Operador instanceof

console.log(shark instanceof Lobo)
