let listasDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNatela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    resposiveVoice.speak(texto, 'brazilian portuguese female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNatela('h1', 'Jogo do número secreto');
    exibirTextoNatela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
   
    if(chute == numeroSecreto) {
        exibirTextoNatela('h1', 'acertou!');
          let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
          let mensagemtentativas = 'você descobriu o número secreto com ${tentativas} ${palavraTentativa}!';
          exibirTextoNaTela('p', mensagemTentativas);
          Document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'o número secreto é maior');
        }
        tentativas++;
        limparCampo();
        }
    }

    function gerarNumeroAleatorio() {
       let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
       let quantidadeDeElementosNaLista = listasDeNumerosSorteados.length;

       if (quantidadeDeElementosNaLista == numeroLimite) {
            listasDeNumerosSorteados = [];
       }
       if (listasDeNumerosSorteados.includes(numeroEscolhido)) {
            return gerarNumeroAleatorio();
       } else {
            listasDeNumerosSorteados.push(numeroEscolhido);
            console.log(listasDeNumerosSorteados)
            return numeroEscolhido;
       }
    }

    function limparCampo() {
        chute = document.querySelector('input');
        chute.value = '';
    } 

    function reiniciarJogo() {
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true)
    }