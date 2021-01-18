import React from 'react';
import './../styles/deliveryList.css';
import Truck from './track';
import DeliveryContainer from './deliveryContainer';
const Base = () => {
    return (
        <>
            <DeliveryContainer/>
            <Truck/>
        </>
    );
}

export default Base;