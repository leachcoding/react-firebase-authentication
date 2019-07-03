import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import FooterItem from '../Footer/Footer';

const Landing = () => (
  <Router>
   <div>
    
      <Switch>
        <Route path="/" exact component={About} /> 
        <Route path="/contact" component={Contact} />
      </Switch>
      <FooterItem />
  </div>
  </Router>
);

export default Landing;
