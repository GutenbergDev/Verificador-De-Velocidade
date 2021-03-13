function verificaVelocidade() {
    let inVelocidadePermi = document.querySelector('#inVelocidadePermi');
    let inVelocidadeCond = document.querySelector('#inVelocidadeCond');
    let outSituacao = document.querySelector('#outSituacao');

    // recebe o conteúdo dos campos de entrada
    let velocidadePermitida = Number(inVelocidadePermi.value);
    let velocidadeCondutor = Number(inVelocidadeCond.value);

    // se não preencheu ou Not-a-Number 
    if (inVelocidadePermi.value == "" || isNaN(velocidadePermitida) ||
    inVelocidadeCond.value == "" || isNaN(velocidadeCondutor)) {
        alert("Informe as velocidades corretamente.");
        inVelocidadePermi.focus();
        return;
    }

    // condições
    if (velocidadeCondutor <= velocidadePermitida) {
        outSituacao.textContent= `Sem Multa`;
        outSituacao.style.background = "#33a060";  //Aqui kkkk
        outSituacao.style.color = '#fff';
    } else {
        let maisVinte = velocidadePermitida * 1.20;
        if (velocidadeCondutor <= maisVinte) {
            outSituacao.textContent = `Multa Leve`;
            outSituacao.style.background = '#e69d30';
            outSituacao.style.color = '#fff';
        } else {
            outSituacao.textContent = `Multa Grave`;
            outSituacao.style.background = '#d84444';
            outSituacao.style.color = '#fff';
        }
    } 

    function limparCampos() {
        location.reload();
        document.querySelector('#inVelocidadePermi').focus();
    }
    let btLimpar = document.querySelector('#btLimpar');
    btLimpar.addEventListener("click", limparCampos);
}
// criar referência ao botão
let btVerificar = document.querySelector('#btVerificar');
btVerificar.addEventListener("click", verificaVelocidade);

