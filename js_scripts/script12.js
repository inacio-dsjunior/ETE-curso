function abrirJanela(){
    let tempo = new Date()
    let hora = tempo.getHours()

    if(hora > 18){
        var d = document.getElementById("texto");
        d.innerHTML = "Boa noite!"
    }
}