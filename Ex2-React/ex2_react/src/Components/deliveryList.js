import React, { Component} from 'react';
import Main from './main';
import orders from './../Data/orders.json';
import Delivery from './delivery';
import Truck from './../Components/track';
import backGround from './../images/background.png';

const divStyle = {
    backgroundImage: `url(${backGround})`,
    width: '60%',
    height: '50%',
    marginRight: '0px',
    backgroundRepeat  : 'no-repeat'
}

const listStyle = {
    background:'white',
    display: 'inline-block',
    height:'550px',
    marginLeft:'15%',
    marginTop:'5%'
}

class DeliveryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders : []
        }
        this.eachOrder = this.eachOrder.bind(this);
        this.add = this.add.bind(this);
        this.nextId = this.nextId.bind(this);
        this.delete = this.delete.bind(this);
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

    componentDidMount() {
        orders.map(item => this.add({id: item.id, date: item.date, name: item.name, city: item.city}));
    }

    nextId(orders = []){
        let max = orders.reduce((prev, curr) => prev.id > curr.id ? prev.id :curr.id, 0);
        return ++max
    }

    delete(id) {
        this.setState(prevState => ({
            orders: prevState.orders.filter(order => order.id !== id)
        }))
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
        return <Delivery key={i} index={item.id} onChange={this.update} onDelete={this.delete}>
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
                <div style={divStyle}>
                    <div style={listStyle}>
                    { this.state.orders.map(this.eachOrder) }
                    </div>
                
                <Truck/>
                </div>
        )
    }
}


export default DeliveryList;