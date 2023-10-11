const form = document.querySelector("form")
const resp = document.querySelector("h3")

//ouvinte

form = addEventListener("submit", (e) => {
    e.preventDefault()

    const permitida = Number(form.inPermitida.value)
    const condutor = Number(form.inCondutor.value)
    alert(permitida + condutor)
    
    let leve = permitida + (permitida * 0.2)
    

    if(condutor <= permitida){
    resp.innerText = `Situação: Sem Multa`
   
} else if(condutor <= leve) {
    resp.InnerText = `Situação: Multa Leve`
    
} else {preventDefault
    resp.innerText = `Situação: Multa grave`
}
})