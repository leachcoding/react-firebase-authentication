import React, { Component } from 'react'
import FooterComponent from './FooterComponent'
import Contact from './Contact'

export default class FooterIndex extends Component {
  constructor(props) {
    super(props)
    this.state = { isEmptyState: true }
  }

  triggerAddTripState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true
    })
  }

  triggerRemoveTripState = () => {
    this.setState({
      ...this.state,
      isEmptyState: true,
      isAddTripState: false
    })
  }

  render() {
    return (
      <>
        <div>
          {this.state.isEmptyState && <FooterComponent addTrip={this.triggerAddTripState}/>}
          {this.state.isAddTripState && <Contact addTrip={this.triggerRemoveTripState}/>}
        </div>
      </>
    )
  }
}
