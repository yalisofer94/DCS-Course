import React, { Component } from 'react';
//import {MdSave} from 'react-icons/md';

class Delivery extends Component {

render() {
    return (
        <div className="order">
            {this.props.children}
        </div>
    )
}
}

export default Delivery;