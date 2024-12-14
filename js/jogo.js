function jogada(jogador) {
    const itens = ['', 'Pedra', 'Papel', 'Tesoura'];
    // Sortear numero do computador no JO KEN PO
    const computador = Math.floor(Math.random() * 3) + 1;

    // Exibe o modal de "JO KEN PO!!!"
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.innerText = 'JO';
    modal.style.display = 'block';

    // Fecha o modal após 1 segundo
    setTimeout(function () {
        modalMessage.innerText = 'KEN';
    }, 1000);

    setTimeout(function () {
        modalMessage.innerText = 'PO!!!';
    }, 2000);

    setTimeout(function () {
        modal.style.display = 'none';
    }, 7500);

    setTimeout(function () {
        console.log('-='.repeat(20));
        console.log(`Computador jogou ${itens[computador]}`);
        console.log(`Jogador jogou ${itens[jogador]}`);
        console.log('-='.repeat(20));

        const resultado = document.getElementById('resultado');

        if (computador === jogador) {
            modalMessage.innerHTML = `EMPATE<br>Você e o computador escolheu ${itens[computador]}.`;
        } else if ((computador === 1 && jogador === 2) || (computador === 2 && jogador === 3) || (computador === 3 && jogador === 1)) {
            modalMessage.innerHTML = `PARABÉNS!<br>Você escolheu ${itens[jogador]} e venceu o computador que escolheu ${itens[computador]}.`;
        } else if ((computador === 1 && jogador === 3) || (computador === 2 && jogador === 1) || (computador === 3 && jogador === 2)) {
            modalMessage.innerHTML = `VOCÊ PERDEU!<br>Melhor sorte na próxima!<br>Sua escolheu foi ${itens[jogador]}. Computador escolheu ${itens[computador]}.`;
        } else {
            resultado.innerText = 'JOGADA INVÁLIDA!';
        }
    }, 2500);
}

const pedra = document.getElementById('pedra');
pedra.addEventListener('click', function () {
    jogada(1);
});

const papel = document.getElementById('papel');
papel.addEventListener('click', function () {
    jogada(2);
});

const tesoura = document.getElementById('tesoura');
tesoura.addEventListener('click', function () {
    jogada(3);
});