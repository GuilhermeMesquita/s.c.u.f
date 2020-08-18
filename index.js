const a = document.getElementById('cpf')
function checkCPF() {

    if (a.value.length == 3) {
        a.value += "."
    }
    if (a.value.length == 7) {
        a.value += "."
    }
    if (a.value.length == 11) {
        a.value += "-"
    }
    if (a.value.length == 14) {
        alert("CPF em formato válido!")
        a.className = "texts"
    } else {
        a.className = "textsObg"
    }

}

const b = document.getElementById('rg')
function checkRG() {

    if (b.value.length == 2) {
        b.value += "."
    }
    if (b.value.length == 6) {
        b.value += "."
    }
    if (b.value.length == 10) {
        b.value += "-"
    }
    if (b.value.length == 12) {
        alert("RG em formato válido!")
        b.className = 'texts'
    } else {
        b.className = 'textsObg'
    }

}

function checkButton() {
    if (b.value.length < 12 || a.value.length < 14) {
        alert("Favor preencher corretamente os campos obrigatórios, marcados em vermelho!")
    }
}