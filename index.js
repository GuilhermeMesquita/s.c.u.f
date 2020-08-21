
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
            document.getElementById('state').value = conteudo.uf
            document.getElementById('city').value = conteudo.localidade
            document.getElementById('bairro').value = conteudo.bairro
        }
    }

    requisicaoCEP.send()
}




// ESTADO & CIDADE

function getEstados() {

    const request = new XMLHttpRequest();
    request.open("GET", "https://servicodados.ibge.gov.br/api/v1/localidades/estados", true);

    request.onreadystatechange = function () {
        if (request.status == 200 && request.readyState == 4) {
            const states = JSON.parse(request.responseText);
            const select = document.getElementById("state");

            for (let i = 0; i < states.length; i++) {
                select.innerHTML += "<option value=" + states[i].sigla + ">" + states[i].nome + "</option>"
            }
        }
    }

    request.send();
}

function getCidade(estado) {

    const requisicaoCity = new XMLHttpRequest();
    const select = document.getElementById("city");

    select.innerHTML = "<option selected>Carregando...<option>"
    requisicaoCity.open("GET", `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`, true);

    requisicaoCity.onreadystatechange = function () {
        if (requisicaoCity.status == 200 && requisicaoCity.readyState == 4) {
            select.innerHTML = "";
            const cidades = JSON.parse(requisicaoCity.responseText);

            for (let i = 0; i < cidades.length; i++) {
                select.innerHTML += `<option value="${cidades[i].id}">${cidades[i].nome}</option>`;
            }
        }
    }

    requisicaoCity.send();
}

getEstados();

function checkButton() {
    const fields = {
        "nome": formulario.name.value,
        "CPF": formulario.cpf.value,
        "RG": formulario.rg.value,
        "data_nasc": formulario.dataNasc.value,
        "tipo_cnh": formulario.selectCNH.value,
        "estado_civil": formulario.estc.value,
        "CEP": formulario.cep.value,
        "rua": formulario.address.value,
        "bairro": formulario.bairro.value,
        "cidade": formulario.city.value,
        "estado": formulario.state.value,
        "numero": formulario.number.value,
        "complemento": formulario.cmp.value
    };
    if (rg.value.length < 12 || cpf.value.length < 14 || cep.value.length < 9) {
        alert("Favor preencher corretamente os campos obrigatórios, marcados em vermelho!")

    } else {
        alert("Cadastro feito com sucesso!")

        console.log(fields);

        const jsonFields = JSON.stringify(fields)

        console.log(jsonFields)
        const reqSave = new XMLHttpRequest();
        reqSave.open("POST", " https://beginner-api.herokuapp.com/save", true)
        reqSave.setRequestHeader("Content-Type", "application/json")
        reqSave.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                reqSave.send()
            }
        }
    }
}
