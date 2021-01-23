import React, {Component} from 'react';
import DeliveryForm from './../Components/deliveryForm';
import DeliveryList from './deliveryList';
import background from './../images/Scene.png';
import DeliveryFormAdd from './../Components/deliveryFormAdd';
import deliveries from './../Data/orders.json';

const divBackground = {
    backgroundImage: `url(${background})`,
    backgroundRepeat  : 'no-repeat',
    height:'800px',
    width:'1335px',
    position:'absolute',
    right:'0'
} 
class DeliveryContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            orders: [],
            inputs: {
                id: null ,
                date: '',
                name: '',
                city: ''
            },
            editing: false
        }

        this.edit = this.edit.bind(this);
        this.add = this.add.bind(this);
        this.nextId = this.nextId.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        deliveries.map(item => this.add({id:item.id, date: item.date, name: item.name, city:item.city}));
    } 

    edit(id,date,name,city) {
        this.setState(prevState => ({
            editing: true,
            inputs: {
                id: id,
                date: date,
                name:name,
                city:city   
            }}))
    }

    delete(id) {
        this.setState(prevState => ({
            orders: prevState.orders.filter(order => order.id !== id)
        }))
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

    update(newDelivery, id) {
        this.setState(prevState => ({
                editing: false,
                orders: prevState.orders.map((order) => (order.id === id ? newDelivery : order))
            }
        ))
    }

    nextId(orders) {
        let max = orders.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0);
        return ++max;
    }

    render(){
        return (
            <div style={divBackground}>
                <DeliveryList
                    editOn={this.edit}
                    orders={this.state.orders}
                    onDelete={this.delete}
                />
                {!this.state.editing ?(
                <DeliveryFormAdd
                    addDelivery={this.add}
                />) 
                :(<DeliveryForm
                    id={this.state.inputs.id}
                    name={this.state.inputs.name}
                    city={this.state.inputs.city}
                    date={this.state.inputs.date}
                    updateOn={this.update}
                />)}
            </div>
        );
    } 
}

export default DeliveryContainer;