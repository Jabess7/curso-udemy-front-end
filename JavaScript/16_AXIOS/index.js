/*// 1 - instalação

console.log(axios)
*/
// 2 -resquest
const getData = async() => {
    try {
        const response = await postFetch.get("/users",
        // 4 - definindo Headers
        {
            headers:{
                "Content-Type": 'application/json',
                custom: "header-jabess" , 
            
            },
        }
        );

       
        return response.data;
    } catch (error) {
        console.log(error);
        
    };
};


getData()



// 3 - imprimindo dados na tela 

const container = document.querySelector("#user-container")

const printData = async () => {
    const data = await getData();

    data.forEach((user) => {
        const div = document.createElement('div')

        const nameElement = document.createElement("h2")

        nameElement.textContent = user.name

        div.appendChild(nameElement)

        container.appendChild(div)
    })

}

printData()

const form = document.querySelector('#post-form')
const titleInput = document.querySelector('#title')
const bodyInput = document.querySelector('#body')

form.addEventListener("submit", (e) => {
        e.preventDefault();
        postFetch.post("/posts",{
           title: titleInput.value, body: bodyInput.value,  userId: 1    ,
        });
});