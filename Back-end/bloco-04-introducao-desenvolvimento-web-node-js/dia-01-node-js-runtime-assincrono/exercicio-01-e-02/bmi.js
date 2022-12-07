const weight = 59;
const height = 1.59;

const imc = () => {
    const result = weight / (height * height);
    return process.stdout.write(`O imc é de: ${result.toFixed(2)}`);
}

imc();