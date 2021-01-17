import React, { Component} from 'react';
import truck from './../images/mobel.png';
const truckStyles = {
    paddingTop:'24%',
    position:'absolute',
    left:'740px',
    bottom:'185px'
}
class Truck extends Component {
    render() {
        return(
            <img src={truck} alt="Truck!" style={truckStyles}/>
        );
    }
}

export default Truck;
