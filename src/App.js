import React, { Component } from 'react';
import { Header, Article } from './components/Static';
import Sidebar from './components/Sidebar';
import './css/App.css';

class App extends Component {
  render() {
    // In der Regel wäre diese Komponente vermutlich viel komplexer und würde die vielen Bestandteile regeln, die zur Seite gehören.
    return (
      <div className="App">
        <Header />
        <Article />
        <Sidebar />
      </div>
    );
  }
}

export default App;
