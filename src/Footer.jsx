import React from 'react';
import { render } from 'react-dom';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p className="footer-text">
          <a href="mailto:lars@engvik.nu">Savner du noe?</a>
        </p>
        <a href="//larm.engvik.nu/2016">2016</a> | <a href="//larm.engvik.nu/2015">2015</a> | <a href="//larm.engvik.nu/2014">2014</a>
      </div>
    );
  }
}

export default Footer;
