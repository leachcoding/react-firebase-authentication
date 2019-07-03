import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'
import { Search } from './Search'
import VenueList from './VenueList'







class SearchApp extends Component {

  constructor() {
    
    super();

    this.state = {
      venues: []
    };
    
    
  }

  componentDidMount() {
    this.getVenues();
  }

  getLocation(callback) {
    navigator.geolocation.getCurrentPosition(function(location) {
      callback(location.coords.latitude + ',' + location.coords.longitude)
    })
  };

  handleSubmit(query) {
    this.getVenues(query);
  }
  
  getVenues(query) {
  
    let setVenueState = this.setState.bind(this);
  
    const venuesEndpoint = 'https://api.foursquare.com/v2/venues/explore?';
    
    

    
  
    this.getLocation(function (latlong) {
  
      const params = {
        client_id: 'P0MUIV0RTLQVGVOGHMEJY2TTUPA4T0GZH3BBZI5NP5OGPWIS',
        client_secret: 'ZNEH5BYOLXRZ5DZUBP3M11YSYIKXTULHUW0MJFZ2USJ22PAC',
        limit: 3,
        query,
        v: '20130619',
        ll: latlong
      };
      fetch(venuesEndpoint + new URLSearchParams(params), {
        method: 'GET'
      }).then(response => response.json()).then(response => {
        setVenueState({venues: response.response.groups[0].items});
        console.log(response)
      });
    });
  }


  render() {
    // var venueList = this.state.venues.map((item, i) =>
      // <Venues key={i} name={item.venue.name} />
    // );
  
    return (
      <div className='wrapper'>
          <h1>LIVE YOUR BEST LIFE</h1>
        <div>
          <Search onSubmit={(value)=>this.handleSubmit(value)} path='/'/>
        </div>
        <div>
          <VenueList venues={this.state.venues} path='/'/>
        </div>
      </div>
      
    );
  }
}

export default SearchApp;