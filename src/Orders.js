import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import './Orders.css'
import { useStateValue } from "./StateProvider";
import Order from './Order'
import { Link } from 'react-router-dom';

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    
    if(user) {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
    } else {
        setOrders([])
    }

  }, [user])
    
    console.log(orders);

    return (
        
        <div className='orders'>
            <div className='orders__container'></div> 
            <div className='orders__thanks'>
                <p>Thank You </p>
                <p><Link to='/' className='orders__link'>Go to Home Page</Link></p>
            </div>
            
        </div>
    )
}

export default Orders