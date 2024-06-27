# Escrevendo as Classes de um Jogo

Neste desafio de projeto proposto pelo professor Felipe Aguiar do curso de Lógica de Programação da DIO criei uma classe que representa um herói em um jogo de aventura. O herói tem um nome, uma idade e um tipo (como guerreiro, mago, monge ou ninja). Além dessas propriedades, o herói tem um método chamado atacar, que exibe uma mensagem diferente dependendo do tipo do herói. Essa mensagem segue um formato específico, onde o tipo do herói e a descrição do ataque são exibidos juntos. Foi utilizado conceitos de variáveis, operadores, laços de repetição, estruturas de decisão, funções, classes e objetos para implementar essa funcionalidade. 
Neste projeto, você deve criar uma classe genérica que represente um herói de uma aventura. Esta classe deve possuir as s
eguintes propriedades:

## Objetivo:

Criar uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

nome

idade

tipo (ex: guerreiro, mago, monge, ninja)

## Atenção
A classe deve incluir um método chamado atacar que deve atender aos seguintes requisitos:

Exibir a mensagem: "O ${tipo} atacou usando ${ataque}"
Onde {tipo} deve ser concatenado com o tipo que está na propriedade da classe

E {ataque} deve seguir uma descrição diferente conforme o tipo, conforme a tabela abaixo:

Se mago -> No ataque exibir: "usou magia"
Se guerreiro -> No ataque exibir: "usou espada"
Se monge -> No ataque exibir: "usou artes marciais"
Se ninja -> No ataque exibir: "usou shuriken"
Saída
Ao final, deve-se exibir uma mensagem no seguinte formato:

"O ${tipo} atacou usando ${ataque}"
Exemplo: "O mago atacou usando magia"
Exemplo: "O guerreiro atacou usando espada"
