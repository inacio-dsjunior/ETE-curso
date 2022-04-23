/* 
$(document).ready(function(){
    $("#ret1").click(function(){
        $(this).hide("slow")
    })
    $("#ret2").click(function(){
        $(this).hide("fast")
    })
    $("#ret3").click(function(){
        $(this).hide("5000")
    })
    $("#ret4").click(function(){
        $(".retangulo").show()
    })
})

// Quando apertar no botão ação o quadrado vermelho desaparece 
$(document).ready(function(){
    $("button").click(function(){
        $("#ret1").toggle()
    })
})

$(document).ready(function(){
    $("button").click(function(){
        $("retangulo").hide()
    })
})

function abrirJanela(){
    let tempo = new Date()
    let hora = tempo.getHours()

    if(hora > 18){
        var d = document.getElementById("texto");
        d.innerHTML = "Boa noite!"
    }
}
*/
function abrirJanela() {
    var tempo = Date()
    var hora = tempo.getHours()

    if (hora < 12) {
        var d = document.getElementById("texto")
        innerHTML = "Bom dia!"
    } else {
        if (hora < 18) {
            var d = document.getElementById("texto")
            innerHTML = "Boa tarde!"
        } else {
            var d = document.getElementById("texto")
            d.innerHTML = "Boa noite!"
        }
    }
}

