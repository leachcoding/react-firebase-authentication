import React, { Component } from 'react';

export const Venue = ({ name, location, city, state }) => (
    
        <li className='venue'>
            <a href="#">{name}</a>
            <p>{location}</p>
            <p>{city}</p>
            <p>{state}</p>
        </li>
        
    

)