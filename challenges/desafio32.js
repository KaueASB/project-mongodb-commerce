// 32 - Retorne o nome e a quantidade de vendas (vendidos) dos sanduíches em que o número de vendas é múltiplo de 5
// Para isso, escreva a query no arquivo desafio32.js

db.produtos.find(
  { vendidos: { $mod: [5, 0] } },
  { _id: 0, nome: 1, vendidos: 1 },
);