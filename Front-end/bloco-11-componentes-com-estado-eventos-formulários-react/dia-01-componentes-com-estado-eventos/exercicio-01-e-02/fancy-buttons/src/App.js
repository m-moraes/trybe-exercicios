import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
function handleClick() {
  console.log('Clicou no botão!')
}

function handleSecondClick() {
  console.log('Clicou no segundo botão!')
}

function handleThirdClick() {
  console.log('Clicou no terceiro botão!')
}

class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    return (
      <div>
        <button onClick={handleClick}>Meu botão</button>
        <button onClick={handleSecondClick}>Meu outro botão</button>
        <button onClick={handleThirdClick}>Meu terceiro botão</button>
      </div>
    )
  }
}

export default App;

