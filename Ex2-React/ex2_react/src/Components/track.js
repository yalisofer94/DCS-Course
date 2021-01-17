import React, { Component} from 'react';
import truck from './../images/Track.jpeg';

class Truck extends Component {
    render() {
        return(
            <img src={truck} alt="Truck!" style={{paddingTop:'12%',paddingRight:'30%'}}/>
        );
    }
}

export default Truck;
