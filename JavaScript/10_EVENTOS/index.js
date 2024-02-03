// 1 - adicionando eventos

const btn = document.querySelector("#my-button")

btn.addEventListener("click", function(){
    console.log("clicou aqui ")
    
})

// 2 - removendo eventos

const secondBtn = document.querySelector("#btn")

function imprimirMensagem(){
    console.log("teste")
}
secondBtn.addEventListener('click', imprimirMensagem)

const thirBtn = document.querySelector("#other-btn")

thirBtn.addEventListener("click", () => {
    console.log("evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem)
})

// 3 - argumento do evento
const myTitle = document.querySelector('#my-title')

myTitle.addEventListener("click", (event) => {
    console.log(event)
    console.log(event.offsetX)
    console.log(event.pointerType)
    console.log(event.target)

})

// 4 - propagação
const contaneinerBtn = document.querySelector("#btn-container")

const btnInsideContainer = document.querySelector("#div-btn")

contaneinerBtn.addEventListener("click", () => {
    console.log("teste")
})

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    
    console.log("segundo evento")
})

// 5 - removendo evento padrão

const a = document.querySelector("a")

a.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("não foi ")
})

// 6 -eventos de tecla
document.addEventListener("keyup", (e) => {
    console.log(`soltou a tecla ${e.key}`)
})

document.addEventListener("keydown", (e) => {
    console.log(`apertou a tecla ${e.key}`)
})

// 7 - eventos mouse
const mouse = document.querySelector("#mouse")

mouse.addEventListener("mousedown", () => {
        console.log("Pressionou o botão")
})

mouse.addEventListener("mouseup", () => {
    console.log("soltou o botão ")
})

mouse.addEventListener("dblclick", () => {
    console.log("click duplo")
})

// 8 - movimento do mouse

 /*document.addEventListener("mousemove", (e) => {
    console.log(`no eixo x: ${e.x}`)
    console.log(`no eixo y: ${e.y}`)
})*/

// 9 - evento de scroll

/*window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200){
        console.log("passamos de 200px")
    }
})*/

// 10 - eventos de focus

const input = document.querySelector("#my-input")

input.addEventListener("focus", () => {
    console.log('entrou no input')
})

input.addEventListener("blur", () => {
    console.log('saiu do input')
})


//11 - evento de carregamento

window.addEventListener("load", () => {
    console.log("carregou a pagina")
})

/*window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = ""
})*/

// 12 - debounce

const debounce = (f, delay) => {
    let timeout

    return (...arguments) => {
    if(timeout) {
        clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
        f.apply(arguments)
    }, delay)
}
}

window.addEventListener("mousemove", debounce(() => {
    console.log("testando ")},
    400))

