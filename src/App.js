import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Control from './Control.js';
import Container from './Container.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      cards: []
    };
    this.buildCard = this.buildCard.bind(this);
  }

  buildCard(title, body) {
    let array = [...this.state.cards, {title: title, body: body}];
    this.setState({
      cards: array
    })
  }

  render() {
    return (
      <div className="App">
        <Control buildCard={this.buildCard}/>
        <Container />
      </div>
    );
  }
}

export default App;
