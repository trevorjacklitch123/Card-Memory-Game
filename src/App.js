import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <form id="SuitForm">
        <input id="spades" type="checkbox" checked /> All Spades<br />
        <input id="clubs" type="checkbox" /> All Clubs<br />
        <input id="diamonds" type="checkbox" /> All Diamonds<br />
        <input id="hearts" type="checkbox" /> All Hearts<br />
        <input id="submit" type="submit" value="Start Memory Game!" />
      </form>
    );
  }
}

export default App;
