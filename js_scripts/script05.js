function abrirJanela() {
    let d = document.getElementById("ret0")
    let mais //true

    d.innerHTML = ""
    do {
        d.innerHTML = d.innerHTML + "<div id='ret2'></div>"
        mais = confirm("Adicionar quadrado?")
    } while (mais)
    
    /*mais = confirm("Adicionar quadrado?")
    d.innerHTML = d.innerHTML +"<div id='ret2'></div>"*/

}
