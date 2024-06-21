let arrayAmigos = [];
let paresSorteados = [];
let listaAmigosConteiner = document.getElementById('lista-amigos');
let botaoSortear = document.querySelector('.button.secondary');
let botaoAdicionar = document.querySelector('button.primary');

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value.trim().toUpperCase();

    if (arrayAmigos.includes(amigo)) {
        mostrarMensagemDeAlerta('Esse nome já foi adicionado. Insira outro nome.');
        return
    } else if (amigo === '') {
        mostrarMensagemDeAlerta('É preciso inserir um nome.');
        return
    }

    arrayAmigos.push(amigo);
    listaAmigosConteiner.textContent = arrayAmigos.join(', ');
    document.getElementById('nome-amigo').value = '';
    limparMensagemDeAlerta();

    if (arrayAmigos.length > 2) {
        botaoSortear.disabled = false;
        botaoSortear.classList.remove('disabled');
    }
}

function sortear() {
    let numerosGerados = [];

    for (let i = 0; i < arrayAmigos.length; i++) {
        let posicaoAmigoPresenteado;

        do {
            posicaoAmigoPresenteado = Math.floor(Math.random() * arrayAmigos.length);
        } while (i === posicaoAmigoPresenteado || numerosGerados.includes(posicaoAmigoPresenteado));

        numerosGerados.push(posicaoAmigoPresenteado);

        let parSorteado = [arrayAmigos[i], arrayAmigos[posicaoAmigoPresenteado]];
        paresSorteados.push(parSorteado);
    }

    numerosGerados = [];
    mostrarSorteados(paresSorteados);
    botaoAdicionar.disabled = true;
    botaoAdicionar.classList.add('disabled');
}

function mostrarSorteados(paresSorteados) {
    let listaSorteioConteiner = document.querySelector('.prizeDraw__container');

    for (let i = 0; i < paresSorteados.length; i++) {
        listaSorteioConteiner.innerHTML = listaSorteioConteiner.innerHTML + 
            `<p id="lista-sorteio">${paresSorteados[i][0]} ---> ${paresSorteados[i][1]}</p>`;
    }
}

function reiniciar() {
    document.getElementById('nome-amigo').value = '';
    document.querySelector('.prizeDraw__container').innerHTML = '';
    arrayAmigos = [];
    paresSorteados = [];
    listaAmigosConteiner.textContent = '';
    limparMensagemDeAlerta();
    botaoSortear.disabled = true;
    botaoSortear.classList.add('disabled');
    botaoAdicionar.disabled = false;
    botaoAdicionar.classList.remove('disabled');
}

function mostrarMensagemDeAlerta(mensagem) {
    limparMensagemDeAlerta();

    let inputAmigo = document.getElementById('nome-amigo');
    inputAmigo.insertAdjacentHTML('afterend', `<span id="mensagem-alerta">${mensagem}</span>`);
}

function limparMensagemDeAlerta() {
    if (document.getElementById('mensagem-alerta')) {
        document.getElementById('mensagem-alerta').remove();
    }
}