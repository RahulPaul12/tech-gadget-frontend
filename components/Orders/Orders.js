import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from './../../hooks/useAuth';
import { useHistory } from 'react-router';
import { CheckCircle } from '@mui/icons-material';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const history = useHistory();
    useEffect(() => {
        
        fetch(`https://tech-gadget-backend.onrender.com/orders?email=${user.email}`, {
            
            headers: {
                'authorization':`Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => {
               
               
                if (res.status === 200) {
                    return res.json();
                }
                else if (res.status === 401) {
                   
                    history.push('/login');
                }

            })
            .then(data => setOrders(data));
    }, [])
     
    return (
        <div>
            <h2 style={{backgroundColor:'#98AFC7', padding:'2%', textAlign:'center'}}>You have placed: {orders.length} Orders</h2>
            <ul>
                {orders.map(order => <h5
style={{backgroundColor:'lightgray', padding:'2%'}}
                    key={order._id}
                >Order Id: {order._id} : {order.email} : {order.createdAt}  <CheckCircle className="check"/></h5>)}
            </ul>
        </div>
    );
};

export default Orders;