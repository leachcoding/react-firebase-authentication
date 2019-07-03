import {Venue} from './Venue';
import React, {Component} from 'react';

export default class VenueList extends Component {
  render() {
      return (
        <ul className="venue-list">
          {this.props.venues && this.props.venues.map((item, i) =>
              <Venue key = {i}
                name={item.venue.name}
                location={item.venue.location.formattedAddress[0]}
                city={item.venue.location.formattedAddress[1]}
                state={item.venue.location.formattedAddress[2]}
                // {...this.props}
              />
            )
          }
        </ul>
    )
  }
}

// export const VenueList = this.props.venues.map((item, i) =>
//     <Venue 
//         key = {i}
//         name = {item.venue.name}
//     />
// );



