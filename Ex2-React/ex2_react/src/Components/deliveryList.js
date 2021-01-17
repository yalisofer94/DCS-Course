import React, { Component} from 'react';
import Main from './main';
import orders from './../Data/orders.json';
import Delivery from './delivery';

const styles = {

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
        return <Delivery key={i} index={item.date} onChange={this.update} onDelete={this.delete} style={{display:'inline'}}>
            <div>
                <span style={{marginLeft:"7px"}}>{item.id}</span>
                <span>{item.date}</span>
                <span>{item.name}</span>
                <span>{item.city}</span>
            </div>
            </Delivery>
        }

    render() {
        return (
            <div className="Delivery-List">
                <Main/>
                { this.state.orders.map(this.eachOrder) }

            </div>
        )
    }
}


export default DeliveryList;