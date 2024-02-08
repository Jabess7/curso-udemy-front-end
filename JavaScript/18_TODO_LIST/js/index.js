//Seleção de elementos
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const CancelEditBtn = document.querySelector("#cancel-edit-btn")
const button = document.querySelector(".finish-todo")


//Funções
const saveTodo = (text) => {
    const todo = document.createElement("div")
    todo.classList.add("todo")
    

   
    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

   const divBtn = document.createElement("div")
    divBtn.classList.add("button-edit")
    todo.appendChild(divBtn)

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
    divBtn.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`
    divBtn.appendChild(editBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    divBtn.appendChild(deleteBtn)

    todoList.appendChild(todo)

    todoInput.value = ""
    todoInput.focus();
}


//Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputValue = todoInput.value
    if(inputValue){
      saveTodo(inputValue)  
    }
});

document.addEventListener('click', (e) => {
    const targetEl = e.target
    console.log(targetEl)
    const parentEl = targetEl.closest('div')
    
      


    if(targetEl.classList.contains("finish-todo") ){
        
        const secondParentEl = parentEl.closest("#todo-list")
        console.log(secondParentEl)

        secondParentEl.classList.toggle("done")
      
      
      
    }
})