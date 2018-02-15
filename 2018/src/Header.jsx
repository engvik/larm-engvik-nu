import React from 'react';
import { render } from 'react-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Free:Larm</h1>
        <p>28.02 - 03.03</p>
        <p>En oversikt over gratiskonsertene by:Larm-uka.</p>
      </div>
    );
  }
}

export default Header;
