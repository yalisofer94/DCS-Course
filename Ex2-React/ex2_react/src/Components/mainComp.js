import React from 'react';
import './../styles/deliveryList.css';
import Truck from './track';
import DeliveryContainer from './deliveryContainer';
const Base = () => {
    return (
        <div style={{position:'relative'}}>
            <DeliveryContainer/>
            <Truck/>
        </div>
    );
}

export default Base;