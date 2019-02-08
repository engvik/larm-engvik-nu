require('./styles/index.scss');

import React from 'react';
import { render } from 'react-dom';

import Concerts from './Concerts.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Concerts />
        <Footer />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
