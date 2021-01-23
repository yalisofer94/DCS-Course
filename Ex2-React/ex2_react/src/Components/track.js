import React from 'react';
import truck from './../images/mobel.png';
const truckStyles = {
    position:'absolute',
    top:'747px'
}
const Truck = () =>{
        return(
            <img src={truck} alt="Truck!" style={truckStyles}/>
        );
    }

export default Truck;