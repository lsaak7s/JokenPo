const pedra = document.getElementById('pedra');
const papel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');

const resultado = document.getElementById('resultado');
const ponto = document.getElementById('ponto');
const pontoComputador = document.getElementById('pontoComputador');

const opcoes = ['pedra', 'papel', 'tesoura'];

let pontosUsuario = 0;
let pontosComputador = 0;

pedra.addEventListener('click', () => jogar('pedra'));
papel.addEventListener('click', () => jogar('papel'));
tesoura.addEventListener('click', () => jogar('tesoura'));

const jogar = (escolhaUsuario) => {
    const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];
    if (escolhaUsuario === escolhaComputador) {
        resultado.innerHTML = `Empate!`;
        pontosComputador++; pontoComputador.innerHTML = `${pontosComputador}`;

    }
    else if ((escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura' ||
        escolhaUsuario === 'papel' && escolhaComputador === 'pedra' ||
        escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')) {
        resultado.innerHTML = `Você Ganhou!`;
        pontosUsuario++; ponto.innerHTML = `${pontosUsuario}`;
    }
}









//resultado.innerHTML = `Empate! Você ${escolhaUsuario}. <br>
//computador ${escolhaComputador}.`;


// resultado.innerHTML = `Você ${escolhaUsuario}. <br> computador ${escolhaComputador}.`;