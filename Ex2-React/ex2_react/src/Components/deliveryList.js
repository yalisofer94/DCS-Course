import React, { Component} from 'react';
import Delivery from './delivery';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
//import TableHead from '@material-ui/core/TableHead';
//import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const listStyle = {
    background:'white',
    display: 'inline-block',
    height:'582px',
    width:'530px',
    borderRadius:'15px',
    float:'left',
    marginTop:'123px',
    marginLeft:'233px'
}

class DeliveryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders : props.orders
        }
        this.eachOrder = this.eachOrder.bind(this);
        this.add = this.add.bind(this);
        this.edit = this.edit.bind(this);
    }

    add({id=null ,date='01.01.2021', name='John Does', city='EveryWhere'}) {
        this.setState(prevState => ({
            orders: [
                ...prevState.orders, {
                    id: id !== null ? id : this.nextId(prevState.orders),
                    date: date,
                    name: name,
                    city: city
                }]
        }))
    }

    edit(id,date, name,city){
        this.props.editOn(id, date, name,city);
    }

    update(newOrder,i) {
        this.setState(prevState => ({
            orders: prevState.orders.map(
                order => order.id !== i ? order :{...order, order: newOrder}
            )
        }))
    }

    eachOrder(item,i) {
        return <Delivery key={i} index={item.id} name={item.name} date={item.date} city={item.city} onChange={this.update} onDelete={this.props.onDelete} onEdit={this.edit}>
                <TableCell style={{marginLeft:"20px", borderBottom:'none'}}>{item.id}</TableCell>
                <TableCell style={{marginLeft:"20px" , borderBottom:'none'}}>{item.date}</TableCell>
                <TableCell style={{marginLeft:"20px", borderBottom:'none'}}>{item.name}</TableCell>
                <TableCell style={{marginLeft:"20px", borderBottom:'none'}}>{item.city}</TableCell>   
            </Delivery>
        }

    render() {
        return (
            <TableContainer component={Paper} style={listStyle}>
                <Table aria-label="simple table" >
                    <TableBody>
                        { this.props.orders.map(this.eachOrder) }
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

export default DeliveryList;