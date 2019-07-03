import React from 'react';

import './Contact.css';

const Contact = props => {

  return (
      <div className="Form-container">
        <form className="form" action="#" >
          <h1>Contact Us</h1>
          <input type="text"
            id="name"
            name="name"
            placeholder="Name" />

          <input type="email"
            id="email"
            name="email"
            placeholder="Email" />

          <textarea id="subject"
            name="subject"
            placeholder="Message" >
          </textarea> 

          <input type="submit"
            value="Submit"
            onClick={props.addTrip} />
        </form>
      </div>
    );
  }

export default Contact