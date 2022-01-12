// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

// A função fetch recebe 2 parâmetros: o endereço para o qual a requisição será feita, ou seja, a url do serviço, e um objeto contendo as especificações da requisição. Para essa API, atribuiremos a esse objeto as chaves method e headers:

let jokeContainer = document.querySelector('#jokeContainer')
const fetchJoke = () => {
  const myObject = {
    method: 'GET', 
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => jokeContainer.innerHTML = data.joke);
};

// Exemplo de requisição via API
// const fetchJoke = () => {
// const url = 'https://api.chucknorris.io/jokes/random?category=dev';

// fetch(url)
// .then((response) => response.json())
// .then((data) => console.log(data.value));
// }

// fetchJoke(); 

window.onload = () => fetchJoke();