let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNatela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
exibirTextoNatela('h1', 'Jogo do número secreto');
exibirTextoNatela('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
   
    if(chute == numeroSecreto) {
        exibirTextoNatela('h1', 'acertou!');
          let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
          let mensagemtentativas = você descobriu o número secreto com ${tentativas}  
    } 
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1)
}





