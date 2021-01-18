import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const textFieldStyle = {
    marginTop:'20px', 
    backgroundColor:'white',
    borderRadius:'15px',
    border:'1px solid red', 
    width:'250px'
}
const formStyle = {
    position:'absolute', 
}
const DeliveryFormAdd = (props) => {
    console.log(props);
        return (
            <form style={formStyle}>
                <TextField
                    id="outlined-date-input"
                    label=''
                    type="date"
                    autoComplete="current-date"
                    variant="outlined"
                    style={textFieldStyle}
                />
                <br/>
                {<TextField
                    id="outlined-name-input"
                    label=''
                    type="text"
                    autoComplete="current-name"
                    variant="outlined"
                    value={props.title}
                    style={textFieldStyle}
                />}
                <br/>
                <TextField
                    id="outlined-city-input"
                    label=''
                    type="text"
                    autoComplete="current-city"
                    variant="outlined"
                    value={props.city}
                    style={textFieldStyle}
                />
                <br/>
                <Button variant="contained" color="secondary" style={{marginLeft:'85px', marginTop:'20px'}} size="large">Save</Button>
            </form>
        );
    }

export default DeliveryFormAdd;