let cliente = {
    nome: 'Maria',
    idade: 35,
    cidade: 'Rio de Janeiro'
};

for (let chave in cliente) {
    console.log(`${chave}: ${cliente[chave]}`);
}


delete cliente.cidade;

console.log(cliente); // O objeto cliente agora não possui a propriedade 'cidade'
console.log('idade' in cliente); // Saída: true
console.log(cliente.hasOwnProperty('cidade')); // Saída: false, pois cidade foi removida
