//import { Button } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { Button, ButtonGroup, Modal } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import './Method.css';

import { CheckCircle } from '@mui/icons-material';
function MyVerticallyCenteredModal(props) {
  const history = useHistory();
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
      
    >
      <Modal.Header closeButton>
        
      </Modal.Header>
      <Modal.Body className="check">
        <CheckCircle className="check"/>
        <p>
          Payment SuccessFul !
        </p>
      </Modal.Body>
      
        <Button onClick={props.onHide}>Ok</Button>
        
      
    </Modal>
  
  );
  history.push('./orders');
  
}


const Method = () => {
  const [error,seterror]= useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [modalShow, setModalShow] = React.useState(false);
    

    


    const handleSubmit= async(e)=>{
      e.preventDefault()
        if(!stripe || !elements){
            return ;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }
        const {error, paymentMethod}= await stripe.createPaymentMethod(
          {
            type:'card',
            card
          }
        );
        if(error){
          seterror(error.message);
        }
        else{
          seterror('');
        }
     
        
    }
    return (
      <>
      
            

        <div className="container">
         <div class="form w-75">
      </div>
      <div class="form__right mx-auto">
        
        <h2 class="form__right__title">Last Step !</h2>
        <p class="form__right__info">Enter Your Payment info Below.</p>
        <div class="form__right__check">
          <input type="radio" name="paymentMethod" id="option1" />
          <label for="option1" class="form__right__check--creditCard">
      
            <span class="form__right__check--creditCard__text"
              >Credit Card</span>
			  <img src="https://i.imgur.com/2ISgYja.png" width="30"/> <img src="https://i.imgur.com/W1vtnOV.png" width="30"/> <img src="https://i.imgur.com/35tC99g.png" width="30"/> <img src="https://i.imgur.com/2ISgYja.png" width="30"/>
          </label>

          <input type="radio" name="paymentMethod" id="option2" />
          <label for="option2" class="form__right__check--payPal"> Paypal
		  <img src="https://i.imgur.com/7kQEsHU.png" width="30"/>
          </label>
        </div>
        <div class="form__right__form-control">
          <label for="cardCode" class="form__right__form-control--name"
            >Card Number</label
          >
          <input
            type="text"
            class="form__right__form-control--cardNumber"
            id="cardCode"
            placeholder="123 4567 8912 3456"
          />
          {
           
          }
          
        </div>
        <div class="form__right__expireDate">
          <div class="form__right__expireDate__right expireDateForm">
            <label
              for="cardCode"
              style={{marginTop: '5px'}}
              class="form__right__form-control--name"
              >Expire Date</label
            >
            <select
              type="text"
              class="form__right__expireDate--month"
              id="month"
              placeholder="123 4567 8912 3456"
            >
              <option value="0">Month</option>
            </select>
            <select
              type="text"
              class="form__right__expireDate--year"
              id="year"
              placeholder="123 4567 8912 3456"
            >
              <option value="0">Year</option>
            </select>
          </div>
          <div class="form__right__expireDate__left">
            <label
              for="cardCode"
              style={{marginTop: '5px'}}
              class="form__right__form-control--name"
              >CVC</label
            >
            <input
              type="text"
              class="form__right__expireDate__left--cvc"
              id="cardCode"
              placeholder="111"
              maxlength="3"
            />
          </div>
        </div>
        <div class="form__right__form-control">
          <label for="cardCode" class="form__right__form-control--name"
            >By creating an account, you agree to Study.com’s Terms of Use and
            Privacy Policy.
            </label>
          
           <NavLink to='/orders'><button class="form__right__form-control--button mx-auto" onClick={() => setModalShow(true)}>Pay Now</button></NavLink>
           

      <MyVerticallyCenteredModal
        show={modalShow}
        
        onHide={() => setModalShow(false)}
        
      />
          

          
        </div>
      </div>
    </div>
    </>
  
    );
};

export default Method;