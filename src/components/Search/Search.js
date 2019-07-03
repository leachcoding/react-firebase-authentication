import React, { Component } from 'react';

export class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  getLocation(callback) {

    navigator.geolocation.getCurrentPosition(function(location) {
      callback(location.coords.latitude + ',' + location.coords.longitude)
    })
  };

  render() {
    return (
      <div className="mainDiv">
        <form onSubmit={this.handleSubmit} className="searchForm">
            <input id="venueType" onChange={this.handleChange} value={this.state.value} placeholder="Looking for..." className="venueSearch" />
            <input type="submit" value="Submit" className="searchButton"/ >
        </form>
      </div>
    );
  }
}

export default Search