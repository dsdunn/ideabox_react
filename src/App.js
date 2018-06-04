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

  buildCard(title, body, id) {
    let array = [...this.state.cards, {title: title, body: body, id: id}];
    this.setState({
      cards: array
    })
  }

  deleteCard(id) {
    //this.state.cards.
  }

  render() {
    return (
      <div className="App">
        <Control buildCard={this.buildCard}/>
        <Container cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
