## Testes com o Mocha

Para instalar o Mocha: 

npm install -D mocha@10.0 chai@4.3

Depois disso, é necessário importar o Mocha e o chai no arquivo .js e escrever os tetes. 

**describe e it**:

- o describe aceita dois parâmetros: o primeiro é uma string e o segundo é uma função para executar o cenário de teste:

- a sintaxe do it é semelhante, ele aceita uma string e uma função. 

```
describe('Quando a média for menor que 7', function () {
  it('retorna "reprovação"', function () {
    //
  });
});
```

**Aferindo testes com o Chai**

Ele nos ajuda com as asserções, nos fornecendo maneiras que dizer o que queremos testar, validando o resultado.

```
const { expect } = require('chai');
const resposta = calculaSituacao(4);

expect(resposta).equals('reprovação');
```
