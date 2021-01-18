import React, {useState, useEffect,Component} from 'react';
import DeliveryForm from './../Components/deliveryForm';
import DeliveryList from './deliveryList';
import background from './../images/Scene.png';
import DeliveryFormAdd from './../Components/deliveryFormAdd';
import deliveries from './../Data/orders.json';


const divBackground = {
    backgroundImage: `url(${background})`,
    backgroundRepeat  : 'no-repeat',
    width: '100%',
    height:'800px',
    position:'relative',
} 

/* class DeliveryContainer extends Component {
    render() {
        return(
            <div style={divBackground}>
            <DeliveryList/>
            <DeliveryForm
                title={''}
            />
            </div>
        );
    }
} */



const DeliveryContainer = () => {
    const [orders, setOrder] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
        const getData = (deliveries) => {
            deliveries.map(item => setOrder([...orders, item]));
            console.log("byyy ",orders);
        }
        useEffect(()=>{
            getData(deliveries)
        },[])


        const edit = (item) => {
            setIsEdit(true);
            setTitle(item[0].name);
            setLocation(item[0].city);
            setDate(item[0].date);
        }

        const add = (id=null, date='', name='', city='') => {
            
        }
        
        return (
            <div style={divBackground}>
                <DeliveryList
                    editOn={edit}
                />
                {!isEdit ?(<DeliveryFormAdd
                    addDelivery={add}
                />) 
                
                :(<DeliveryForm
                    isEdit={isEdit}
                    title={title}
                    setTitle={setTitle}
                    location={location}
                    setLocation={setLocation}
                    date={date}
                    setDate={setDate}
                    //handleAddOrEditClick={handleAddOrEditClick}
                />)}
            </div>
        ); 
    }

export default DeliveryContainer;
    






