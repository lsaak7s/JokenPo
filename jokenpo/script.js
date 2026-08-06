// Pegando os elementos do HTML para selecionar a opção do usuário
const pedra = document.getElementById('pedra');
const papel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');
// Pegando os elementos do HTML para mostrar o resultado e os pontos
const resultado = document.getElementById('resultado');
const ponto = document.getElementById('ponto');
const pontoComputador = document.getElementById('pontoComputador');
// Criando um objeto para representar as opções do jogo ENUM
const Opcao = {
    PEDRA: 'pedra',
    PAPEL: 'papel',
    TESOURA: 'tesoura'
};
// Array Opeções
const opcoes = [Opcao.PEDRA, Opcao.PAPEL, Opcao.TESOURA];
// contador de pontos
let pontosUsuario = 0;
let pontosComputador = 0;
// Selecionando a opção do usuário, Com base na opção clicada, chamando a função jogar() passando a opção do usuário como parâmetro.Nossaaaa slk
pedra.addEventListener('click', () => jogar(Opcao.PEDRA));
papel.addEventListener('click', () => jogar(Opcao.PAPEL));
tesoura.addEventListener('click', () => jogar(Opcao.TESOURA));
// Aqui e a logica simples do jogo ele compara a escolha do usuario com a do random do computador, e atualiza o resultado e os pontos de acordo com o resultado da partida.
const jogar = (escolhaUsuario) => {
    const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];
    // Aqui e a parte do computador ganhar
    if (escolhaUsuario === escolhaComputador) {
        resultado.innerHTML = `Computador Ganhou!`;
        pontosComputador++; pontoComputador.innerHTML = `${pontosComputador}`;
    }
    // Aqui e a parte do usuario ganhar
    else if ((escolhaUsuario === Opcao.PEDRA && escolhaComputador === Opcao.TESOURA ||
        escolhaUsuario === Opcao.PAPEL && escolhaComputador === Opcao.PEDRA ||
        escolhaUsuario === Opcao.TESOURA && escolhaComputador === Opcao.PAPEL)) {
        resultado.innerHTML = `Você Ganhou!`;
        pontosUsuario++; ponto.innerHTML = `${pontosUsuario}`;
    }
    // Aqui Ea parte do enpate
    else {
        resultado.innerHTML = `Empate!`;
    }
}