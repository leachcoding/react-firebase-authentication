import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import FooterItem from '../Footer/Footer';
import SearchApp from '../Search/SearchApp';

const Landing = () => (
  <Router>
   <div>
   <Route path="/"  component={SearchApp} />
      <Switch>

        <Route path="/about"  component={About} /> 
        <Route path="/contact" component={Contact} />
      </Switch>
    <FooterItem />
  </div>
  </Router>
);

export default Landing;
