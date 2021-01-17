import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const fieldStyles = {
    marginTop:'15px'
}

class DeliveryForm extends Component{
    render() {
        return (
            <form style={{position:'absolute', right:'300px', marginTop:'100px'}}>
                <TextField
                    id="outlined-date-input"
                    label=""
                    color="primary:#fafafa"
                    type="date"
                    autoComplete="current-date"
                    variant="outlined"
                    style={{marginTop:'20px', backgroundColor:'white',borderRadius:'15px',border:'1px solid red', width:'250px'}}
                />
                <br/>
                <TextField
                    id="outlined-name-input"
                    label="Name"
                    color="primary:#fafafa"
                    type="text"
                    autoComplete="current-name"
                    variant="outlined"
                    style={{marginTop:'20px', backgroundColor:'white',borderRadius:'15px',border:'1px solid red', width:'250px'}}
                />
                <br/>
                <TextField
                    id="outlined-city-input"
                    label="City"
                    color="primary:#fafafa"
                    type="text"
                    autoComplete="current-city"
                    variant="outlined"
                    style={{marginTop:'20px', backgroundColor:'white',borderRadius:'15px',border:'1px solid red', width:'250px'}}
                />
                <br/>
                <Button variant="contained" color="secondary" style={{marginLeft:'85px', marginTop:'20px'}} size="large">Save</Button>
            </form>
        );
    }
}

export default DeliveryForm;