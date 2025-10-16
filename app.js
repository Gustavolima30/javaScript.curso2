let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNatela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = TextDecoder;
}

exibirTextoNatela('h1', 'Jogo do número secreto');
exibirTextoNatela('p', 'Escolha um número entre 1 e 100');

function verificarChute() {
    console.log('numeroSecreto');
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1)
}