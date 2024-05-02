//funçao alugar --> devolver;
function alterarStatus(gameId) {
    const botao = document.getElementById(`game-${gameId}`).querySelector('.dashboard__item__button');
    const imagensJogos = document.querySelectorAll(`#game-${gameId} .dashboard__item__img`);

    //status botao
const estaAlugado = botao.innerHTML === 'Devolver';
botao.innerHTML = estaAlugado ? 'Alugar' : 'Devolver';
botao.classList.toggle("dashboard__item__button--return", !estaAlugado);
imagensJogos.forEach(imagem => imagem.classList.toggle("dashboard__item__img--rented", !estaAlugado));
} 