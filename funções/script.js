function areaQuadrado(lado) {
return lado * lado;
}
console.log (areaQuadrado(8));
//parametros e argumentos

// peso e altura são os argumentos
function imc(peso, altura){
  const imc= peso/(altura**2);
  return imc
}

console.log (imc(83,1.75))

function corFavorita(cor){

 prompt(cor)
if(cor === 'azul'){
  
return ' eu gosto do céu'
}
else if(cor === 'verde'){

  return 'eu gosto de mato'
}
else{
  return 'eu nao gosto de cores'
}
}

addEventListener('click', function(){
   return console.log('oi')
});
//ou

function mostraConsole(){
  console.log('oi')
};
addEventListener('click', mostraConsole);


function terceiraIdade(idade){
  if(typeof idade !=='number'){
    return "por favor preencha um número"
  }
  else if(idade >= 60){
 return true
  }
  else{
    return false
  }
}
;
// Crie uma função para verificar se um valor é Truthy
function pabloMente(verdade, mentira){
  if(verdade < mentira ){
 return false
  }
  else if(verdade > mentira ){
    return true
  }
}
console.log(pabloMente(1,2))

function istruthy(dado){
  return !!dado
}
console.log(istruthy(2))
// Crie uma função matemática que retorne o perímetro de um quadrado

function perimetroQuadrado(lado){
  var perimetro = 4 * lado;
  return perimetro
}

console.log(perimetroQuadrado(4))
// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo

function nomeCompleto(nome, sobrenome){
return nome + ' ' + sobrenome;
}
console.log(nomeCompleto("ruan", "cardoso"))

// ela deve possuir os parâmetros: nome e sobrenome
// Crie uma função que verifica se um número é par
function isEven(numero){
  var modulo= numero % 2

  if(modulo === 0){
    return true;
  }
  else{
    return false
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){
console.log('Ruan Cardoso')
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
 
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
