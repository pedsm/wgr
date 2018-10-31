import React, { Component } from 'react';
import './App.css';
import logo from'./imgs/logo.png'
import content from './posts.json'

class App extends Component {
  componentDidMount(){
    // eslint-disable-next-line
    // particlesJS.load('particles-js', '/particles.json', function() {
    //   console.log('callback - particles.js config loaded');
    // });
    console.log(content)
  }

  render() {
    return (
      <div className="App">
        <div id="particles-js"/>
        <header className="App-header">
          <img src={logo} alt="Logo" />
          <h1>Anaesthesia W.G.R.</h1>
          {content.header.links.map((link, i)=> (
            <a key={i} href={link.link}><i className={`fab fa-${link.icon} fa-2x`}></i></a>
          ))}
          <br/>
          <i className="fas fa-chevron-down fa-2x"></i>
        </header>
        <main>
          {content.posts.map((post, i) => (
            <article key={i}>
              <div className="bgContainer">
                <img className="bg" src={`./imgs/${post.art}`} alt="cover1" />
              </div>
              <p className="tiny">.01</p>
              <img className="cover" src={`./imgs/${post.art}`} alt="cover1" />
              <footer>
                <div>
                  <h3>{post.subtitle}</h3>
                  <h2>{post.title}</h2>
                </div>
                <div className="iconSession">
                  {post.links.map((link, i)=> (
                    <a key={i} href={link.link}><i className={`fab fa-${link.icon} fa-2x`}></i></a>
                  ))}
                </div>
              </footer>
            </article>
          ))}
        </main>
      </div>
    );
  }
}

export default App;
