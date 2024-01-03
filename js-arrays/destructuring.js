const numerosPares = [2,4,6]
const numerosImpares = [1,3,5]
const numeros = [...numerosPares,...numerosImpares] //numerosPares.concat(numerosImpares) 
/*
const num1 = 1
const num2 = 2
*/
const [num1, num2, ...outrosNumeros]= [1,2,3,4,5]

const pessoa = {
  nome: 'mane',
  idade: 25
}
const pessoaComTelefone = {
  ...pessoa, telefone: 185415644894
}
    const {nome} =pessoa
console.log(pessoa, pessoaComTelefone)