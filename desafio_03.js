const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Champions {
    constructor(nomeChampions, idadeChampions, tipoChampions){
        this.nomeChampions = nomeChampions;
        this.idadeChampions = idadeChampions;
        this.tipoChampions = tipoChampions;
    }
    atacar(){
        let ataque = '';
        if(this.tipoChampions === 'mago'){
            ataque = 'magia';
        } else if(this.tipoChampions === 'guerreiro'){
            ataque = 'espada';
        } else if(this.tipoChampions === 'monge'){
            ataque = 'artes marciais';
        } else if(this.tipoChampions === 'ninja'){
            ataque = 'shuriken';
        }

        console.log(`O ${this.nomeChampions} atacou usando ${ataque}`);
    }
}

rl.question('Digite o nome do champion: ', (nome) => {
    rl.question('Digite a idade do champion: ', (idade) => {
        rl.question('Digite o tipo do champion (mago, guerreiro, monge, ninja): ', (tipo) => {
            const meuChampion = new Champions(nome, idade, tipo);
            meuChampion.atacar();
            rl.close();
        });
    });
});
