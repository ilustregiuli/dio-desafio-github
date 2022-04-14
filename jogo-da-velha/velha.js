let jogador = null;
let vencedor = null;
let jogadorSelecionado = document.getElementById('jogador-selecionado');
let quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id){
    let quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-'){
        return;
    }
    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';
    if(jogador === 'X'){
        jogador = 'O';
    } else {
        jogador = 'X';
    }
    mudarJogador(jogador);
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){

    if(checaSequencia(quad1,quad2,quad3)){
        mudarCorQuadrado(quad1,quad2,quad3);
    }
}

function mudarCorQuadrado(quad1,quad2,quad3){
    quad1.style.color = '#eee';
    quad2.style.color = '#eee';
    quad3.style.color = '#eee';
}

function checaSequencia(quad1,quad2,quad3){
    let ehIgual = false;
    if(quad1.innerHTML !== '-' && quad1.innerHTML === quad2.innerHTML && quad2.innerHTML === quad3.innerHTML){
        ehIgual = true;
    }
    return ehIgual;
}




