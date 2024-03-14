

function calcular() {

    document.getElementById("calculadora").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio do formulário
    
        let peso = parseInt(document.querySelector('#peso').value)
        let altura = parseInt(document.querySelector('#altura').value)
        let idade = parseInt(document.querySelector('#idade').value)
        let sexo = document.querySelector('#sexo').value
        let exercicio = document.querySelector('#exercicio').value
        let esforco = parseInt(document.querySelector('#esforco').value)
        let resultado = document.querySelector('#resultado')
        let resultadoTotal = document.querySelector('#gasto-calorico-total')

        if (sexo === 'masculino') {
            var TMB = Math.ceil((88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade)) * 100) / 100
        } else  if (sexo === 'feminino') {
            var TMB = Math.ceil((447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade)) * 100) / 100
        }

        let gastoCaloricoTotal = Math.ceil((TMB + esforco + ((exercicio*peso)/7)) * 100) / 100
        resultado.innerHTML = `Sua TMB é de: <strong>${TMB}</strong>`
        resultadoTotal.innerHTML = `Seu gasto calorico é de: <strong>${Math.ceil(gastoCaloricoTotal*100) / 100} kcal</strong>`

        var divAuExiste = document.getElementById("divAumento")
        var divRedExiste = document.getElementById("divReducao")

        if (divAuExiste) {
            divAuExiste.parentNode.removeChild(divAuExiste)
        }

        var divAumento = document.createElement("div");
        var form = document.getElementById('calculadora')
        divAumento.textContent = `Para aumento de peso, ou superávit calorico, o seu consumo de calorias deverá ser de ${gastoCaloricoTotal + 500} kcal.`
        divAumento.id= "divAumento"
        divAumento.classList.add = ('resultados')
        divAumento.style.marginBottom= '15px'
        form.appendChild(divAumento)

        if (divRedExiste) {
            divRedExiste.parentNode.removeChild(divRedExiste)
        }

        var divReducao = document.createElement("div");
        divReducao.textContent = `Para redução de peso, ou déficit calorico, o seu consumo de calorias deverá ser de ${gastoCaloricoTotal - 500} kcal.`
        divReducao.id = "divReducao"
        divReducao.classList.add = ('resultados')
        divReducao.style.marginBottom= '15px'
        form.appendChild(divReducao)
    })
    
}


function limpar () {
    document.querySelector('#peso').value =''
    document.querySelector('#altura').value =''
    document.querySelector('#idade').value =''
}

