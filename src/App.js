import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuStatus: 'closed'
    }
  }
  handleClick = () => {
    if (this.state.menuStatus === 'open') {
      this.setState({
        menuStatus: 'closed'
      })
    } else {
      this.setState({
        menuStatus: 'open'
      })
    }
  }
  render() {
    return (
      <body>
        <div className="Home">
          <nav>
            <header>
              <h1> Start Bootstrap </h1>
            </header>
            <div className="Hamburger" onClick={() => this.handleClick()}>
              <h6>MENU</h6>
              <img
                src="https://cdn2.iconfinder.com/data/icons/mobile-banking-ver-3a/100/1-48-512.png"
                alt="Hamburger Button"
              />
            </div>
            {/* <div> */}
            <ul>
              <a href="/">SERVICES</a>
              <a href="/">PORTFOLIO</a>
              <a href="/">ABOUT</a>
              <a href="/">TEAM</a>
              <a href="/">CONTACT</a>
            </ul>
            {/* </div> */}
            <div className={"drop-down-" + this.state.menuStatus}>
              <ul className="drop-down-list">
                <a href="/">SERVICES</a>
                <a href="/">PORTFOLIO</a>
                <a href="/">ABOUT</a>
                <a href="/">TEAM</a>
                <a href="/">CONTACT</a>
              </ul>
            </div>
          </nav>
          <div className="Greeting">
            <h3>Welcome To Our Studio!</h3>
            <h2>IT'S NICE TO MEET YOU </h2>
            <button>TELL ME MORE</button>
          </div>
        </div >
        <section className="Services">
          <h4>SERVICES</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>

          <h3>E-Commerce</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>

          <h3>Responsive Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>

          <h3>Web Security</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>

        </section>
      </body>
    );
  }
}

export default App;
