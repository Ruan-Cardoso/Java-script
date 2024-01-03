/*
Um professor acidentalmente adicionou nomes repetidos na lista de chamada:

Ana
Clara
Maria
Maria
João
João
João
Remova os nomes repetidos, deixando apenas um de cada.
*/

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
//            Os elementos de um set nao podem se repitir
const meuSet = new Set([11,11,11,2,33,33,44,44,4,4])
const nomesSet = new Set(nomes)

const nomesAtualizados = [...nomesSet] //ou [...new Set(nomes)]

console.log(meuSet)
console.log(nomesSet)
//Para contar o número de elementos de um Set, use = size
console.log(nomesSet.size)


