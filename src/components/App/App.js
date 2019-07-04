import React from 'react';
import About from '../About/About';
import FooterIndex from './Footer';
import Contact from './Contact';
import SearchApp from '../Search/SearchApp';
import '../App/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <div>
        <Router>
          
        {/* The rendering of the About Component */}
          <Switch>
            <Route path='/' component={SearchApp} /> */}
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
           <FooterIndex />
        </Router>
      </div>
    )
  };
}

export default App;