import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const textFieldStyle = {
    marginTop:'20px', 
    backgroundColor:'white',
    borderRadius:'15px',
    border:'1px solid red', 
    width:'400px'
}
const formStyle = {
    float:'right',
    height:'300px',
    marginRight:'114px',
    marginTop:'104px' 
}
const DeliveryForm = (props) => {
    const currDelivery = {id:props.id, name:props.name, date:props.date, city:props.city};
    const [updatedDelivery, setUpdatedDelivery] = useState(currDelivery);
    
    const onUpdate = (event) => {
        event.preventDefault();
        props.updateOn(updatedDelivery,props.id);
    }
    
    const inputChange = (info) => {
        const {name, value} = info.target;
        setUpdatedDelivery({...updatedDelivery,[name]:value})
    }

        return (
            <div style={formStyle}>
            <form >
                <TextField
                    id="outlined-date-input"
                    type="text"
                    name="date"
                    autoComplete="current-date"
                    variant="outlined"
                    onChange={inputChange}
                    value={updatedDelivery.date}
                    style={textFieldStyle}
                />
                <br/>
                {<TextField
                    id="outlined-name-input"
                    type="text"
                    name="name"
                    autoComplete="current-name"
                    variant="outlined"
                    onChange={inputChange}
                    value={updatedDelivery.name}
                    style={textFieldStyle}
                />}
                <br/>
                <TextField
                    id="outlined-city-input"
                    type="text"
                    name="city"
                    autoComplete="current-city"
                    variant="outlined"
                    onChange={inputChange}
                    value={updatedDelivery.city}
                    style={textFieldStyle}
                />
                <br/>
                <Button variant="contained" onClick={onUpdate} color="secondary" style={{marginLeft:'85px', marginTop:'20px'}} size="large">Update</Button>
            </form>
            </div>
        );
    }

export default DeliveryForm;