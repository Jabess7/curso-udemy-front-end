const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-div button")
const qrCodeInput = document.querySelector("#qr-div input")

const qrCodeImg = document.querySelector("#qr-code img")
//Evento
function generateQrCode(){
   const qrCodeInputValue = qrCodeInput.value
   if(!qrCodeInputValue){
    window.alert("Por favor inserir a URl ou texto no formulario ")
   }
   qrCodeBtn.innerText = "Gerando codigo..."

   qrCodeImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

   
   qrCodeImg.addEventListener("load", () => { 
    container.classList.add("ativo")
   qrCodeBtn.innerText = "Codigo criado"
   
 })
   


}
qrCodeBtn.addEventListener("click", () => {
    generateQrCode()

})

qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
    generateQrCode()}

})

//Limpando Input

qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value){
        container.classList.remove("ativo")
        aqrCodeBtn.innerText = "Gerar QR-Code"
    }
})

