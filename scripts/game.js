
let tabuleiro = ['', '', '', '', '', '', '', '', ''];

let vez = 'O';      //armazena de quem é a vez, modificado na função jogar, inicia no jogador 'X'

let vitoria = ['', '', ''];    //armazena um array com as casas da vitória

let contJogadas = 0;        //utilizada para contar as jogadas

const jogosVencedores = [       //possibilidades de vitória no jogo
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]

];

function executarJogada(posicao) {

    if (vitoria[0] != '' || tabuleiro[posicao] != '') {
        return;
    }

    if (vez == 'O') {
        tabuleiro[posicao] = 'O';
        vez = 'X';
    } else {
        tabuleiro[posicao] = 'X';
        vez = 'O';
    }


    contJogadas++;

    resultadoJogada();
}

function resultadoJogada() {

    for (let jogo of jogosVencedores) {

        if (tabuleiro[jogo[0]] != ''
            && tabuleiro[jogo[0]] == tabuleiro[jogo[1]]
            && tabuleiro[jogo[0]] == tabuleiro[jogo[2]]) {

            vitoria = jogo;
            break;
        }
    }
}

function resetJogo() {
    tabuleiro = ['', '', '', '', '', '', '', '', ''];
    vez = 'O';
    vitoria = ['', '', ''];
    contJogadas = 0;
}