import React, { Component} from 'react';
import background from './../images/background.png';

class Main extends Component {
    render() {
        return (
            <span style={{marginTop:'100px',display: "flex",
            justifyContent: "space-evenly", width: "60%", height: "45%"}}>
                <img src={background} alt="background"/>
            </span>
        )
    }
}

export default Main;