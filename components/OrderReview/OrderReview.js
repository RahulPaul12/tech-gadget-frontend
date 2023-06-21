import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';
import { Button } from '@mui/material';
import Payment from '../Payment/Payment';

const OrderReview = () => {
    const [cart, setCart] = useCart();
    const history = useHistory();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
       
       
        

    }

    const handleProceedToShipping = () => {
        if(cart.length==0){
            alert('you must buy something');
            history.push('/shop');
            return;
        }
          setCart([]);
         clearTheCart();
        history.push('/shipping');
    }

    return (
        <div className="container">
        <div className="cart-container round-5 my-3 text-center d-flex" style={{backgroundColor:'DarkGray', border:'2px solid black'}}>
                { <Cart cart={cart}>
                    
                     
                </Cart> } 
                
                </div>
                

            <Button variant="contained" type="submit" onClick={handleProceedToShipping}   cart={cart}>Proceed to Shipping</Button>
         

            <div className="productContainer ">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        cart={cart}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
                </div>
                
        
        </div>
        
            
            
            
                
           
           
       
    );
};

export default OrderReview;