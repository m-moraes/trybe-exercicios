import readlineSync from 'readline-sync';

const weight = readlineSync.questionFloat('Qual o seu peso? ');
const height = readlineSync.questionFloat('Qual a sua altura? ');

const imc = () => {
    const result = weight / (height * height);
    if(result < 18.5) {
        return process.stdout.write(`O imc é de: ${result.toFixed(2)}. Abaixo do peso.`);
    } 
    else if(result >= 18.5 && result < 25) {
        return process.stdout.write(`O imc é de: ${result.toFixed(2)}. Peso normal.`);
    } 
    else if(result >= 25 && result <= 29.9) {
        return process.stdout.write(`O imc é de: ${result.toFixed(2)}. Acima do peso (sobrepeso).`);
    }
    else if(result >= 30 && result <= 34.9) {
        return process.stdout.write(`O imc é de: ${result.toFixed(2)}. Obesidade grau I.`);
    }
    else if(result >= 35 && result <= 39.9) {
        return process.stdout.write(`O imc é de: ${result.toFixed(2)}. Obesidade grau II.`);
    }
    else if(result >= 40) {
        return process.stdout.write(`O imc é de: ${result.toFixed(2)}. Obesidade graus III e IV.`);
    }
}

imc();