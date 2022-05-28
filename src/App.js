import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom'

import Routes from './components/routes'
import Header from './components/Header'
import Footer from './components/Footer'

import Provider from './store'

import './styles/main.scss';

function App() {
  return (
    <Provider>
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
