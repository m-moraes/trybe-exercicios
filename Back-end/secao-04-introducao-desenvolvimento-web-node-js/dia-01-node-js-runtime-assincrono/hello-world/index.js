import readlineSync from 'readline-sync';

const name = readlineSync.question('Qual o seu nome? ');
const age = readlineSync.questionInt('Qual a sua idade? ');

const hello = () => {
    return process.stdout.write(`Olá, ${name}, você tem ${age} anos.`);
}

hello()