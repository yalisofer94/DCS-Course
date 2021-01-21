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
const DeliveryForm = (props) => {
    console.log(props);
        return (
            <form style={formStyle}>
                <TextField
                    id="outlined-date-input"
                    label={props.date}
                    type="text"
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
                    label={props.location}
                    type="text"
                    autoComplete="current-city"
                    variant="outlined"
                    value={props.city}
                    style={textFieldStyle}
                />
                <br/>
                <Button variant="contained" color="secondary" style={{marginLeft:'85px', marginTop:'20px'}} size="large">Update</Button>
            </form>
        );
    }

export default DeliveryForm;