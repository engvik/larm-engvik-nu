import React from 'react';
import { render } from 'react-dom';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p className="footer-text">
          <a href="mailto:lars@engvik.nu">Savner du noe?</a>
          <a href="https://github.com/engvik/larm-engvik-nu">Kode på GitHub</a>
        </p>
        <a href="/2017">2017</a> | <a href="/2016">2016</a> | <a href="/2015">2015</a> | <a href="/2014">2014</a>
      </div>
    );
  }
}

export default Footer;
