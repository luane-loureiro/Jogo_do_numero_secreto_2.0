let listaDeSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;

mensagemInicial(); 

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
exibirTextoNaTela('h1', 'jogo do numero secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}


function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let msgTentativas = (`Você Descobriu o número secreto com ${tentativas} ${palavraTentativa}.`);
        exibirTextoNaTela ('p', msgTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }
    else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('h1','Número Errado!')
            exibirTextoNaTela('P', `O numero secreto é menor que ${chute}`);
        }
        else {
            exibirTextoNaTela('h1','Número Errado!')
            exibirTextoNaTela('P', `O numero secreto é Maior que ${chute}`);
        
        }
        tentativas++;
        limparCampo();
    }

}

function gerarNumero(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumeros = listaDeSorteados.length;

    if (quantidadeDeNumeros == numeroLimite ) {
        listaDeSorteados = [];
    }

    if(listaDeSorteados.includes(numeroEscolhido)){
        return gerarNumero();
    }
    else {
        listaDeSorteados.push(numeroEscolhido);
        console.log(listaDeSorteados);
        return numeroEscolhido;

    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}
