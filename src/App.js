import React, { Component } from 'react';
import './App.css';
import logo from'./imgs/logo.png'
import jss from 'jss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Logo" />
          <h1>Anaesthesia W.G.R.</h1>
          <i className="fas fa-chevron-down fa-2x"></i>
        </header>
        <main>
          <article>
            <div className="bgContainer">
              <img className="bg" src="/imgs/album_art1.png" alt="cover1" />
            </div>
            <p className="tiny">.01</p>
            <img className="cover" src="/imgs/album_art1.png" alt="cover1" />
            <footer>
              <h3>Anaesthesia W.G.R.</h3>
              <h2>Not About Kendrick Lamar</h2>
            </footer>
          </article>
        </main>
      </div>
    );
  }
}

export default App;
