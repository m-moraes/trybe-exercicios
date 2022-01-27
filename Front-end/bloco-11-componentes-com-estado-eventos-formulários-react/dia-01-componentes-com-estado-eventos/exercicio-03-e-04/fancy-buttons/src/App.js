import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick() {
    console.log('Clicou no botão!')
  }
  
  handleSecondClick() {
    console.log('Clicou no segundo botão!')
  }
  
  handleThirdClick() {
    console.log('Clicou no terceiro botão!')
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Meu botão</button>
        <button onClick={this.handleSecondClick}>Meu outro botão</button>
        <button onClick={this.handleThirdClick}>Meu terceiro botão</button>
      </div>
    )
  }
}

export default App;