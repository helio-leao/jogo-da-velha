
document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.casa');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

    document.getElementById('reset_button').addEventListener('click', buttonClick);
})

function handleClick(evento) {
    let elemento = evento.target;
    let posicao = elemento.id;

    atualizarTelaTabuleiro(posicao);
}

function buttonClick(evento) {
    resetTela();
}

function atualizarTelaTabuleiro(posicao) {
    
    let tabuleiroTela = document.getElementsByClassName('casa');

    if(tabuleiro[posicao] == '') {
        executarJogada(posicao);

        tabuleiroTela[posicao].innerHTML = tabuleiro[posicao];
    }

    if (vitoria[1] != '') {
        for (let casa of vitoria)
            tabuleiroTela[casa].style.color = 'crimson';
    }

    atualizarTelaStatus();
}

function atualizarTelaStatus() {

    let status = '';

    if (vitoria[1] != '') {
        status = "O jogador " + tabuleiro[vitoria[1]] + ' venceu!';
    } else if (contJogadas == 9) {
        status = 'Deu velha!';
    } else {
        status = 'Vez do jogador ' + vez;
    }

    document.getElementById('status').innerHTML = status;
}

function resetTela() {

    resetJogo();

    for (let casa of document.getElementsByClassName('casa')) {
        casa.innerHTML = '';
        casa.style.color = 'black';
    }

    document.getElementById('status').innerHTML = '';
}