function abrirJanela() {
    var quadrados = ""
    for (var i = 10; i > 0; i--) {
        if (i % 2 == 1) {
            quadrados = quadrados + "<div id='ret3'>" + i + "</div>"
        }
    }
    var d = document.getElementById("ret0")
    d.innerHTML = quadrados
}
