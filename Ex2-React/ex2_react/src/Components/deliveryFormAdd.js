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

const buttonStyle = {
    marginLeft:'123px', 
    marginTop:'20px', 
    height:'60px', 
    width:'158px'
}

const DeliveryFormAdd = (props) => {
    const emptyDelivery = {id: null, date:'', name:'', city:''};
    const [newDelivery, setNewDelivery] = useState(emptyDelivery);

    const inputChange = (info) => {
        const {name, value} = info.target;
        setNewDelivery({...newDelivery,[name]:value})
    }

    const onSave = (event) => {
        event.preventDefault();
        console.log(newDelivery);
        if(!newDelivery.name || !newDelivery.city || !newDelivery.date){return}
        else{
            setNewDelivery(emptyDelivery);
            props.addDelivery(newDelivery);
        }   
    }
   
        return (
            <form style={formStyle}>
                <TextField
                    id="outlined-date-input"
                    label=''
                    type="date"
                    autoComplete="current-date"
                    variant="outlined"
                    name="date"
                    value={newDelivery.date}
                    onChange={inputChange}
                    style={textFieldStyle}
                />
                <br/>
                {<TextField
                    id="outlined-name-input"
                    label=''
                    name="name"
                    type="text"
                    autoComplete="current-name"
                    variant="outlined"
                    value={newDelivery.name}
                    style={textFieldStyle}
                    onChange={inputChange}
                />}
                <br/>
                <TextField
                    id="outlined-city-input"
                    label=''
                    name="city"
                    type="text"
                    autoComplete="current-city"
                    variant="outlined"
                    value={newDelivery.city}
                    style={textFieldStyle}
                    onChange={inputChange}
                />
                <br/>
                <Button variant="contained" onClick={onSave} color="secondary" style={buttonStyle} size="large">Save</Button>
            </form>
        );
    }

export default DeliveryFormAdd;