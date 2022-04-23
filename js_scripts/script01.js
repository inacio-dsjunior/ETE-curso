function abrirJanela() {
    var tempo = new Date()
    var semana = tempo.getDay()

    var d = document.getElementById("ret0")
    var quadrados = ""
    switch (semana){
        case 0:
        quadrados = quadrados + '<div id="ret1"></div>'
        case 1:
        quadrados = quadrados + '<div id="ret1"></div>'
        case 2:
        quadrados = quadrados + '<div id="ret1"></div>'
        case 3:
        quadrados = quadrados + '<div id="ret1"></div>'
        case 4:
        quadrados = quadrados + '<div id="ret1"></div>'
        case 5:
        quadrados = quadrados + '<div id="ret1"></div>'
        case 6:
        quadrados = quadrados + '<div id="ret1"></div>'
    }
    d.innerHTML = quadrados;
}