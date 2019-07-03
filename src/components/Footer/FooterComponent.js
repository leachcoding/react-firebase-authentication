import React from 'react';
import footerLogo from './footerLogo.svg';
import './Footer.css';

const FooterComponent = props => {
  return (
    <div className="Footer">
      <footer className="App-footer">
        <img src={footerLogo} className="Logo" alt="Logo"/>
        <div className="Footer-nav">
          <button onClick={props.addTrip} className="Footer-link">
            <p>Contact</p>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default FooterComponent;
