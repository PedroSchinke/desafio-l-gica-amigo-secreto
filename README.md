# Desafio Sorteio de Nomes para Amigo Secreto

## Descrição

Este projeto é um programa de embaralhamento de nomes para um amigo secreto. Através de uma interface simples, o usuário pode adicionar nomes de amigos a uma lista e, posteriormente, realizar o sorteio dos pares de amigo secreto. O projeto é construído usando HTML, CSS e JavaScript.

## Regras de Negócio

1. **Adicionar Nome**:
    - O nome inserido não pode estar vazio ou ser um nome já adicionado.
    - Após adicionar um nome válido, o campo de entrada deve ser limpo.
    - O botão de adição e deve mudar de estilo para indicar quando está habilitado ou desabilitado.

2. **Sorteio**:
    - Cada participante deve ser sorteado exatamente uma vez.
    - Um participante não pode ser sorteado como seu próprio amigo secreto.
    - Todos os participantes devem ter um amigo secreto.
    - Após realizado o sorteio, o usuário não poderá adicionar mais nomes à lista.
    - O botão de sorteio e deve mudar de estilo para indicar quando está habilitado ou desabilitado.

3. **Interface**:
    - A lista de participantes deve ser atualizada e exibida dinamicamente conforme novos nomes são adicionados.
    - Os pares de amigo secreto sorteados devem ser exibidos de forma clara na interface.

4. **Reiniciar**:
    - O usuário deve poder reiniciar a interface para poder realizar outro sorteio novamente.

## Habilidades Praticadas

### Manipulação do DOM

- **Seleção de Elementos**: Utilização de métodos como `document.getElementById` e `document.querySelector` para selecionar e manipular elementos do DOM.
- **Criação e Inserção de Elementos**: Criação de novos elementos HTML (`document.createElement`) e inserção desses elementos no DOM (`appendChild`).
- **Atualização de Conteúdo**: Atualização do conteúdo de elementos existentes usando `textContent` e `innerHTML`.

### Loops

- **Loops For**: Utilização de loops `for` para iterar sobre arrays e realizar operações em cada elemento.

### Condicionais

- **Verificações de Validade**: Uso de condicionais `if` para verificar se os nomes inseridos são válidos (não vazios e não apenas espaços).

### Math.random()

- **Geração de Números Aleatórios**: Uso de `Math.random()` e `Math.floor()` para gerar índices aleatórios ao realizar o sorteio dos pares de amigo secreto.

### Manipulação de Classes e Estilos

- **Adição e Remoção de Classes**: Utilização de `classList.add` e `classList.remove` para alterar a estilização de elementos com base em sua funcionalidade (habilitado/desabilitado).
- **Estilização Condicional**: Aplicação de estilos diferentes para o botão quando ele está desabilitado ou habilitado.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript