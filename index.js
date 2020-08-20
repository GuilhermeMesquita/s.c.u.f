
// CPF

const cpf = document.getElementById('cpf')
function checkCPF() {
    if (cpf.value.length == 3) this.value += "."
    if (cpf.value.length == 7) this.value += "."
    if (cpf.value.length == 11) this.value += "-"
    if (cpf.value.length == 14) {
        cpf.className = 'texts'
    } else {
        cpf.className = 'textsObg'
    }


}

cpf.addEventListener('input', checkCPF)

// RG

const rg = document.getElementById('rg')
function checkRG() {
    if (rg.value.length == 2) this.value += "."
    if (rg.value.length == 6) this.value += "."
    if (rg.value.length == 10) this.value += "-"
    if (rg.value.length == 12) {
        rg.className = 'texts'
    } else {
        rg.className = 'textsObg'
    }

}

rg.addEventListener('input', checkRG)

// CEP

const code = document.getElementById('cep')
function checkCEP() {
    if (code.value.length == 5) this.value += "-"
    if (code.value.length == 9) {
        code.className = 'texts'
    } else {
        code.className = 'textsObg'
    }

}

cep.addEventListener('input', checkCEP)

// CEP AUTOMATICO

function validCEP(cep) {
    var requisicaoCEP = new XMLHttpRequest();
    var urlCEP = 'http://viacep.com.br/ws/' + cep + '/json/unicode/'
    requisicaoCEP.open("GET", urlCEP, true)
    requisicaoCEP.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var JSONText = requisicaoCEP.responseText
            var conteudo = JSON.parse(JSONText)
            document.getElementById('address').value = conteudo.logradouro
            document.getElementById('city').value = conteudo.localidade
            document.getElementById('state').value = conteudo.uf
        }
    }

    requisicaoCEP.send()
}




// ESTADO & CIDADE

// function Estado() {
//     var requisicaoSt = new XMLHttpRequest();

//     requisicaoSt.open("GET", "https://servicodados.ibge.gov.br/api/v1/localidades/estados")
//     requisicaoSt.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             const estado = document.getElementById('state')
//             var obj = JSON.parse(this.responseText)
//             for (var i = 0; i < obj; i++) {
//                 estado.innerHTML += "<option value=" + obj[i].sigla + "-" + state[i].nome + "</option>"
//             }
//         }
//     }
//     requisicaoSt.send();

// }
// Estado();

// function Cidade() {
//     var requisicaoCity = new XMLHttpRequest();

//     requisicaoCity.open("GET", "https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/municipios")
//     requisicaoCity.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             const city = document.getElementById('city')
//             var obj_city = JSON.parse(this.responseText)
//             for (var i = 0; i < obj_city; i++) {
//                 select.innerHTML += `<option value="${city[i].id}">${city[i].nome}</option>`;
//             }
//         }
//     }
//     requisicaoCity.send();

// }


// BOTÃO SALVAR


function checkButton() {
    if (rg.value.length < 12 || cpf.value.length < 14 || cep.value.length < 9) {
        alert("Favor preencher corretamente os campos obrigatórios, marcados em vermelho!")
    }
}





// function mascaraCPF(mascara, input) {
//     const vetMask = mascara.split("")
//     const numCpf = input.value.replace(/\D/g, "")
//     const cursor = input.selectionStart
//     const tecla = (window.event) ? event.keyCode : event.which

//     for (let i = 0; i < numCpf.length; i++) {
//         vetMask.splice(vetMask.indexOf("#"), 1, numCpf[i])
//     }
//     input.value = vetMask.join("")

//     if (cursor == 3 || cursor == 7 || cursor == 11) {

//         input.setSelectionRange(cursor + 1, cursor + 1)
//     } else {

//         input.setSelectionRange(cursor, cursor)
//     }
//     a.className == "texts"
// }








































































// function Estado() {
//     var req = new XMLHttpRequest();

//     req.open("GET", "https://servicodados.ibge.gov.br/api/v1/localidades/estados")
//     req.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             const estado = document.getElementById('state')
//             var obj = JSON.parse(this.responseText)
//             for (var i = 0; i < obj; i++) {
//                 estado.innerHTML += "<option value=" + obj[i].sigla + "-" + state[i].nome + "</option>"
//             }
//         }
//     }
//     req.send();

// }
// Estado();

// function Cidade() {
//     var req = new XMLHttpRequest();

//     req.open("GET", "https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/municipios")
//     req.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             const city = document.getElementById('city')
//             var obj_city = JSON.parse(this.responseText)
//             for (var i = 0; i < obj_city; i++) {
//                 select.innerHTML += `<option value="${city[i].id}">${city[i].nome}</option>`;
//             }
//         }
//     }
//     req.send();

// }


