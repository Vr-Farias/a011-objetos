const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5
};

//a
const pokemon2 = {
    ...pokemon1,
    nome: 'Squirtle',
    tipo: 'Agua'
};

console.log(pokemon2);

//b
pokemon1.ataques = []
pokemon1.ataques.push({nome: "Investida",dano: 40,tipo: "Normal",precisao: 100});

//c
pokemon2.ataques = [...pokemon1.ataques];

//d
pokemon1.ataques.push({nome:"Folha de Navalha", dano:45, tipo: "Grama", precisao: 100});

//e
pokemon2.ataques.push({nome:"Jato de Água", dano:40, tipo:"Normal", precisao:100})

//f
console.log(pokemon1);
console.log(pokemon2);

