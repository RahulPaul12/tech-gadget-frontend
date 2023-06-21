import React from 'react';
import useCart from '../../hooks/useCart';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Method from './Method';


const stripePromise = loadStripe('pk_test_51K3E6GBfkw2xu8D2lo0znEFvdhXRQ6wvRU24sRY2pQb5KEytk3ZBvRC3lNzwF3zznfu4ww57qD2Zicd6J3ESlKBq00oXfwybNg')
const Payment = (props) => {
    const [cart, setCart] = useCart();
    //const { name, price, quantity, key,img } = props.product;
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    
    return (
        <div>
            {/* <h2>{cart.length}</h2>
            <p>Total: {grandTotal.toFixed(2)}</p> */}

            <Elements stripe={stripePromise}>
              <Method cart={cart} />
            </Elements>
            
        </div>
    );
};

export default Payment;