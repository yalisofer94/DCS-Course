import React, { Component } from 'react';
//import {MdSave} from 'react-icons/md';
import {MdDelete, MdEdit} from 'react-icons/md';
import {Fab, TableRow} from '@material-ui/core';

const buttonStyles = {
    border: 'none',
    background: 'none',
    marginLeft:'10px',
}
class Delivery extends Component {
    constructor(props){
        super(props);

        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
    }

    delete() {
        this.props.onDelete(this.props.index);
    }

    edit() {
        this.props.onEdit(this.props.index, this.props.date, this.props.name, this.props.city)
    }
    render() {
        return (
            <TableRow>
                    {this.props.children}
                        <button onClick={this.edit} style={buttonStyles}><Fab size="small" color="secondary" aria-label="delete"><MdEdit fontSize="large"/></Fab></button> 
                        <button onClick={this.delete} style={buttonStyles}><Fab size="small" color="secondary" aria-label="delete"><MdDelete fontSize="large"/></Fab></button>
            </TableRow>
        )
    }
}

export default Delivery;