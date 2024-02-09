//Seleção de elementos
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const CancelEditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.querySelector("#search-input");
const eraseBtn = document.querySelector("#erase-button");
const filterBtn = document.querySelector("#filter-select");


let oldInputValue ;


//Funções
const toggleEdit = () => {
    editForm.classList.toggle("hide")
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
}

const saveTodo = (text, done = 0, save = 1) => {
    const todo = document.createElement("div")
    todo.classList.add("todo")
    

   
    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    todo.appendChild(deleteBtn)

    //utilizando dados local storage
    if(done){
        todo.classList.add('done')
    }if(save){
        saveTodoLocalStorage({text, done})
    }

    
    todoList.appendChild(todo)

    todoInput.value = ""
    todoInput.focus();
}
const updateTodo = (text) => {
    let todos = document.querySelectorAll('.todo')

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3")
        console.log(todoTitle, text, oldInputValue)
        if(todoTitle.innerText === oldInputValue){
            
            todoTitle.innerText  = text
            updateTodoLocalStorage(oldInputValue, text);
        }
    });
};

const getSearchTodos = (search) => {
    let todos = document.querySelectorAll('.todo')

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3").innerText.toLowerCase()

        const normalizedSearch = search.toLowerCase()
        
        todo.style.display = "flex"
        if(!todoTitle.includes(normalizedSearch)){          
            todo.style.display = "none"
        }
});
};

const filterTodos = (filterValue) => {
    const todos = document.querySelectorAll(".todo")

    switch(filterValue) {
        case "all":
            todos.forEach((todo) => todo.style.display = 'flex')
        break;

        case "done":
            todos.forEach((todo) => 
            todo.classList.contains("done") 
            ? (todo.style.display = "flex")
            : (todo.style.display = "none")
            );
        break;
        case "todo":
            todos.forEach((todo) => 
            !todo.classList.contains("done") 
            ? (todo.style.display = "flex")
            : (todo.style.display = "none")
            );
        break;
            default:
                break;
    }

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
   
   // variavel recebe o evento ao clicamos na tela
    const targetEl = e.target
    //varivel acessa o pai da div que foi clicado
    const parentEl = targetEl.closest("div")
    let todoTitle;

    if(parentEl && parentEl.querySelector("h3")){
        todoTitle = parentEl.querySelector("h3").innerText;
    }
   
    // ao clicar verificar se encontra a class finish-todo
    if(targetEl.classList.contains("finish-todo")){
        // caso a condicional a cima seja verdadeira,  variavel parentEl recebe um class done se não tiver, caso ja tenha a remove       
        parentEl.classList.toggle("done"); 
        updateTodoStatusLocalStorage(todoTitle);      
    }
    // ao clicar verificar se encontra a class remove-todo
    if(targetEl.classList.contains("remove-todo") ){
        //caso a condicional a cima seja verdadeira, utilizamos o métado remove() para remover o elemento clicado 
       parentEl.remove();

       removeTodoLocalStorage(todoTitle);
        
    }
    // ao clicar verificar se encontra a class edit-todo
    if(targetEl.classList.contains("edit-todo") ){
        // caso a condicional a cima seja verdadeira, chamamos a função toggleEdit        
        toggleEdit();
        
        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }  
});

// evento cancelar edição
CancelEditBtn.addEventListener("click", (e) => {
        e.preventDefault();
        toggleEdit()
})

editForm.addEventListener("submit", (e) => {
 
    e.preventDefault();
    const editInputValue = editInput.value

    if(editInputValue){
        updateTodo(editInputValue)
    }
    toggleEdit();
})

searchInput.addEventListener("keyup", (e) => {
    const search = e.target.value;

    getSearchTodos(search);
})

eraseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchInput.value = ''

    searchInput.dispatchEvent(new Event("keyup"))
});

filterBtn.addEventListener("change", (e) => {
    const filterValue = e.target.value

   
    filterTodos(filterValue)
});

//local Storage

const getTodoLocalStorage = () => {
    
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    return todos;
}

const loadTodos = () => {
    const todos = getTodoLocalStorage()

    todos.forEach((todo) => {
        saveTodo(todo.text, todo.done, 0)
    });
};

const saveTodoLocalStorage = (todo) => {
    const todos = getTodoLocalStorage();
  
    todos.push(todo);
  
    localStorage.setItem("todos", JSON.stringify(todos));
};

const removeTodoLocalStorage = (todoText) => {
    const todos = getTodoLocalStorage();
    
    const filteredTodos = todos.filter((todo) => todo.text !== todoText)

    localStorage.setItem("todos", JSON.stringify(filteredTodos));
}

const updateTodoStatusLocalStorage = (todoText) => {

    const todos = getTodoLocalStorage();
    
    todos.map((todo) => todo.text === todoText ? todo.done = !todo.done : null)

    localStorage.setItem("todos", JSON.stringify(todos));
}

const updateTodoLocalStorage = (todoOldText, todoNewText) => {

    const todos = getTodoLocalStorage();
    
    todos.map((todo) =>
     todo.text === todoOldText ?( todo.text = todoNewText) : null)

    localStorage.setItem("todos", JSON.stringify(todos));
}

loadTodos();