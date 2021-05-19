import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './layouts/Navigation.js'
import Page from './layouts/Page.js'
import Footer from './layouts/Footer.js'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <main>
            <aside>
              <Navigation />
            </aside>
            <section className='page'>
              <Page />
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
