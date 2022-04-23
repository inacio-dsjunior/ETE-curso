function abrirJanela() {
    let tempo = new Date()
    let semana = tempo.getDay()

    let d = document.getElementById("texto")
    switch (semana) {
        //case 0:
           // d.innerHTML = "Domingo"
           // break
        case 1:
            d.innerHTML = "Segunda-feira"
            break
        case 2:
            d.innerHTML = "Terça-feira"
            break
        case 3:
            d.innnerHTML = "Quarta-feira"
            break
        case 4:
            d.innerHTML = "Quinta-feira"
            break
        case 5:
            d.innerHTML = "Sexta-feira"
            break
        case 6:
            d.innerHTML = "Sábado"
        default:
            d.innerHTML = "!"   
    }   

}