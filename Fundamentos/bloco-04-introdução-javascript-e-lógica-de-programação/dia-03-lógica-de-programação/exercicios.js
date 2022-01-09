/* const n = ?

let resultado = 100;
for (let i = 0; i <= n; i += 1) {
  resultado = resultado - i;
}
console.log(resultado); */


/* Aula ao vivo
let qtd = 10;
let ingredientes = ["queijo","presunto","maionese"];
let sacola = [];
for(let index = 0; index < 10; index+=1){
console.log('exectuou fora: ', index)

let pao = [];

for( let index = 0; index < ingredientes.length; index+=1){
console.log('exectuou dentro: ', index);
pao.push(ingredientes[index])
}
sacola.push(pao);

ingredientes.splice(2)
console.log("Ingredientes: " + ingredientes);
};*/

/*1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
n = 5

*****
*****
*****
*****
*****

*/

let n = 5;
let linhaAsterisco = "";

for(let index = 0; index < n; index += 1) {
  linhaAsterisco = linhaAsterisco + "*";
} 
console.log(linhaAsterisco);

/*2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:*/

/*3- Agora inverta o lado do triângulo. Por exemplo:*/

/*4- Depois, faça uma pirâmide com n asteriscos de base:*/

/*for dentro de for 
o primeiro for é responsável por imprimir as linhas 
o segundo será responsável por imprimir a quantidade de asteriscos
o for será rodado 1 vez e então passará para o segundo que rodará até o final 
o primeiro for será rodado a segunda vez e então passará para o segundo que rodará até o final 
e assim por Diante... Exemplo: */

for (let index = 0; index < 5; index += 1) {
  console.log('Loop atual do primeiro For, index:', index);
  console.log('--------Antes do segundo For--------');
  for (let index2 = 0; index2 < 5; index2 += 1) {
  console.log('Loop atual do segundo For, index:', index2);
  }
  console.log('-------Depois do segundo For---------');
  }; 