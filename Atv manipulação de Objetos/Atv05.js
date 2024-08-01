const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
  };
  for (let i in pessoa) {
    console.log(i + ": " + pessoa[i]);
  }
  console.log(pessoa)