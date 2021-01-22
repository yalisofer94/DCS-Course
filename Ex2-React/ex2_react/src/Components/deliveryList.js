import React, { Component} from 'react';
import Delivery from './delivery';

const listStyle = {
    background:'white',
    display: 'inline-block',
    height:'582px',
/*     marginLeft:'9%',
    position:'relative',
    marginTop:'6%', */
    borderRadius:'15px',
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
                    date: date !== null ? date : this.nextId(prevState.orders),
                    name: name,
                    city: city
                }]
        }))
    }

    edit(id,date, name,city){
        this.props.editOn(id, date, name,city);
    }

    update(newOrder,i) {
        console.log(`Update ${i}: newOrder: ${newOrder}`);

        this.setState(prevState => ({
            orders: prevState.orders.map(
                order => order.id !== i ? order :{...order, order: newOrder}
            )
        }))
    }

    eachOrder(item,i) {
        return <Delivery key={i} index={item.id} name={item.name} date={item.date} city={item.city} onChange={this.update} onDelete={this.props.onDelete} onEdit={this.edit}>
            <span style={{marginTop:'10px'}}>
                <span style={{margin:"15px"}}>{item.id}</span>
                <span style={{marginRight:"15px"}}>{item.date}</span>
                <span style={{marginRight:"15px"}}>{item.name}</span>
                <span style={{marginRight:"30px"}}>{item.city}</span>
            </span>
            </Delivery>
        }

    render() {
        return (
            <div style={listStyle}>
            { this.props.orders.map(this.eachOrder) }
            </div>
        )
    }
}

export default DeliveryList;