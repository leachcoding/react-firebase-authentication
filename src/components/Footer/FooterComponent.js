import React from 'react';
import footerLogo from '../../footerLogo.svg';
import './Footer.css';
import { Link } from 'react-router-dom';

const FooterComponent = props => {
  return (
    <div className="Footer">
      <footer className="App-footer">
        <img src={footerLogo} className="Logo" alt="Logo"/>
        <div className="Footer-nav">
          <Link to="/contact">
            <button onClick={props.addTrip} className="Footer-link">
              <p>Contact</p>
            </button>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default FooterComponent;
