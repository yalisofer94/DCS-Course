import React, { Component } from 'react';
import DeliveryList from './deliveryList';
import './../styles/deliveryList.css';
import Truck from './track';
import DeliveryForm from './../Components/deliveryForm';

const baseStyles = {
    height:'800px'
} 



class Base extends Component{
    render() {
        return (
            <div className="base" style={baseStyles}>
                <DeliveryList />
                <DeliveryForm/>
                <Truck/>
            </div>
        );
    }
}

export default Base;