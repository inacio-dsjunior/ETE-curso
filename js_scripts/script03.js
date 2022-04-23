function abrirJanela() {
    let texto = ""
    for (let i = 1; i < 5; i = i + 1) {
        texto = texto + "Texto" + i + "</br>"
    }
    let d = document.getElementById("texto")
    d.innerHTML = texto
}
