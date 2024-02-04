//IMC DATA
const data = [
    {
      min: 0,
      max: 18.4,
      classification: "Menor que 18,5",
      info: "Magreza",
      obesity: "0",
    },
    {
      min: 18.5,
      max: 24.9,
      classification: "Entre 18,5 e 24,9",
      info: "Normal",
      obesity: "0",
    },
    {
      min: 25,
      max: 29.9,
      classification: "Entre 25,0 e 29,9",
      info: "Sobrepeso",
      obesity: "I",
    },
    {
      min: 30,
      max: 39.9,
      classification: "Entre 30,0 e 39,9",
      info: "Obesidade",
      obesity: "II",
    },
    {
      min: 40,
      max: 99,
      classification: "Maior que 40,0",
      info: "Obesidade grave",
      obesity: "III",
    },
  ];

  // Seleção de elementos
  const imcTable = document.querySelector(".imc-table")
  const heightInput = document.querySelector('#height')
  const weightInput = document.querySelector("#weight")
  const calcBtn = document.querySelector("#calc-btn")
  const clearBtn = document.querySelector("#clear-btn")  
  const busca = [heightInput,weightInput]
  const imcNumber = document.querySelector('#imc-number span')
  const imcInfo = document.querySelector('#imc-info span')
  const backBtn = document.querySelector('#back-btn')
  const resultContainer = document.querySelector('#result-container')
  const calcContainer = document.querySelector("#calc-container")

  //Funções

  //primeira função a ser carregada automaticamente ao inicializar a pagina
  function createTable(data){
    //usamos o forEach para iterar o Array data que é um objeto 
    data.forEach((item) => {
      //o forEach vai passar por cada indece do array e criar uma div com a classe table-date
        const div = document.createElement('div')
        div.classList.add("table-date")
      //seguindo o mesmo raciocinio a cima o forEach vai passar pela variavel classification e criar um <p>, esse p irar receber um texto que esta no Array de objetos,
      //item.classification = variavel data.classification, assim renderizando todo array/objeto de forma dinâmica
      const classification = document.createElement("p")
      classification.innerText = item.classification

      // o mesmo da função acima mas procurando o valor info
        const info = document.createElement("p")
        info.innerText = item.info

      // o mesmo da função acima mas procurando o valor obesity
        const obesity = document.createElement("p")
        obesity.innerText = item.obesity
        //adicionamos a classification dentro da div com o metado appendChild
        div.appendChild(classification)
        //adicionamos a info dentro da div com o metado appendChild
        div.appendChild(info)

        //adicionamos a obesity dentro da div com o metado appendChild
        div.appendChild(obesity)
      
        //adicionamos a div dentro da imcTable com o metado appendChild
        imcTable.appendChild(div)


    })
  }

  function clearInputs(){
    heightInput.value = "";
    weightInput.value = "";
    imcNumber.classList = "";
    imcInfo.classList = "";
  }

  function validDigits(text){
    return text.replace(/[^0-9,]/g,"");
  }

  function calcImc(weight,height){
    const imc = Math.floor(weight / (height*height))
    return imc;
  }

  function showOrHideResults(){
    calcContainer.classList.toggle("hide")
    resultContainer.classList.toggle("hide")
  }

  //Inicialização

  //chamanda a 1 primeira função que é executada automaticamente assim que inicia a pagina
  createTable(data)

  //Eventos
  
  busca.forEach((el) => {
    el.addEventListener("input", (e) => {
      const updatedValue = validDigits(e.target.value);
      e.target.value = updatedValue;
    });
  });
  //adicionar um evento no botão de limpar
  clearBtn.addEventListener('click', (e) => {
    //ao clicar no botão ele atualiza a pagina com o preventDefault ele para esses comportamento
    e.preventDefault();

    //chamar função clearInputs
    clearInputs()  
    
  })

  
  calcBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const weight = weightInput.value.replace(",", ".")
    const height = heightInput.value.replace(",", ".")

    if(!weight || !height && weight == "" || height == " "){
      alert("Por favor informar Altura e Peso ")
      return }
      
      const imc = calcImc(weight,height)
      
      let info

      data.forEach((item) => {
        if(imc >= item.min && imc <= item.max){
          info = item.info          
        }
      });
        if(!info){          
          alert("O valor informado não é adequado para realizar o cálculo do Índice de Massa Corporal (IMC) em seres humanos. Por favor, forneça um valor válido.")
            clearInputs()
          return          
        }
        imcNumber.innerText = imc
        imcInfo.innerText = info

        switch(info){
          case"Magreza":
          imcNumber.classList.add("low")
          imcInfo.classList.add("low")
          break;
          case"Normal":
          imcNumber.classList.add("good")
          imcInfo.classList.add("good")
          break;
          case"Sobrepeso":
          imcNumber.classList.add("low")
          imcInfo.classList.add("low")
          break;
          case"Obesidade":
          imcNumber.classList.add("medium")
          imcInfo.classList.add("medium")
          break;
          case"Obesidade grave":
          imcNumber.classList.add("high")
          imcInfo.classList.add("high")
          break;
        }


     
    showOrHideResults();


  })
  
  backBtn.addEventListener('click', () => {
    clearInputs();
    showOrHideResults();
  })
  
  