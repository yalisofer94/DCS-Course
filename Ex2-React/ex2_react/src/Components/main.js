import React, { Component} from 'react';
import background from './../images/background.png';

class Main extends Component {
    render() {
        return (
            <div style={{marginTop:'100px',display: "flex",
            justifyContent: "space-evenly"}}>
                <img src={background} alt="background"/>
            </div>
        )
    }
}

export default Main;