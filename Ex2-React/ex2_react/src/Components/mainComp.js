import React, { Component } from 'react';
import DeliveryList from './deliveryList';
import Truck from './track';

const baseStyles = {
    position:'relative',
    width:'100%'
} 

class Base extends Component{
    render() {
        return (
            <div className="base">
                <DeliveryList/>
                <Truck/>
            </div>
        );
    }
}

export default Base;