function aluno(primerio, ultimo, idade, matriculado) {
    this.primerioNome = primerio
    this.ultimoNome = ultimo
    this.idade = idade
    this.matriculado = matriculado
    this.nomeCompleto = function() {
        return this.primerioNome + " " + this.ultimoNome
    }
}

function nome() {
    var a = new aluno("Cicero", "Inácio de Souza Junior", 30, true)
    

    document.getElementById("ret0") .innerHTML = a.nomeCompleto()
}
