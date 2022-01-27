import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      clicksCounting: 0,
      clicksSecondCounting: 0,
      clicksThirdCounting: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSecondClick = this.handleSecondClick.bind(this);
    this.handleThirdClick = this.handleThirdClick.bind(this);
  }
  handleClick = () => {
    this.setState((before, _props) => ({
      clicksCounting: before.clicksCounting + 1
    }))
  }
  
  handleSecondClick = () => {
    this.setState((beforeSecond, _props) => ({
      clicksSecondCounting: beforeSecond.clicksSecondCounting + 1
    }))
  }
  
  handleThirdClick = () => {
    this.setState((before, _props) => ({
      clicksThirdCounting: before.clicksThirdCounting + 1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Meu botão {this.state.clicksCounting}</button>
        <button onClick={this.handleSecondClick}>Meu outro botão {this.state.clicksSecondCounting}</button>
        <button onClick={this.handleThirdClick}>Meu terceiro botão {this.state.clicksThirdCounting}</button>
      </div>
    )
  }
}

export default App;