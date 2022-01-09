/* 1 - Crie um objeto player contendo as variáveis listadas abaixo.
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
*/

let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  } 
}; console.log("O jogador tem: " + player["medals"]["golden"] + " medalhas de ouro.");

/* 2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade". */

let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  } 
}; console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade."); 


/* 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
[2006, 2007, 2008, 2009, 2010, 2018] */

let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  } 
}; player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

/* 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".*/

let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  } 
};

console.log("A jogadora " + player.name + " " + player.lastName + "foi eleita a melhor do mundo por" + player.bestInTheWorld.length + " vezes.");

/* 5 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.*/

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
}; 
for (let key in names) {
  console.log("Olá, " + names[key]);
};

/* 6 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto. */

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for (let key in car) {
  console.log("As propriedades desse carro são: " + key + " os valores desse carro são: " + car[key]);
};

/* 7 - 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console: */ 

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log("Bem vinda, " + info.personagem);

/* 8 - Faça um for/in que mostre todas as chaves do objeto. */

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}; 

for (let key in info) {
  console.log(key)
}

/* 9 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console: */

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}; 

for (let key in info) {
  console.log(info[key])
};

/* 10 - 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console: */



/* 10 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false */

function verificaPalindrome(word){
  for(index in word){
    if(word[index] != word[(word.length - 1) - index]){
      return false;
    }
  }
  return true;
}
  console.log(verificaPalindrome('arara'));

function verificaPalindrome(word) {
  for(i = 0; i <= word.length; i -= 1) {
    return false;
  }
}
return true;
console.log(verificaPalindrome("arara"));