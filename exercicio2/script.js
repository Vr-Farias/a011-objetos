const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

//a
const nome1 = filme.elenco[0]
console.log(nome1)

//b
const nome4 = filme.elenco[3]
console.log(nome4)

//c
const transmissoes = filme.transmissoesHoje	
console.log(transmissoes);

//d
const transmissaoBrasil = filme.transmissoesHoje[(1,1)]
console.log(transmissaoBrasil) 