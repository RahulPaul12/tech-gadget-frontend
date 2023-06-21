
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Modal } from '@mui/material';
import Cart from '../Cart/Cart';
import useCart from '../../hooks/useCart';
import { useHistory } from 'react-router';
const ReviewItem = (props) => {
    const  Example=()=> {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <Button variant="primary" onClick={handleShow}>
              Launch demo modal
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
    const [cart, setCart] = useCart();
    const history = useHistory();
    const { name, price, quantity, key,img } = props.product;
    const { handleRemove } = props;
    return (
        <div className="product">
            <div className="d-flex">
                <div  style={{width:'100%'}}>
                    <img src={img} alt=""/>
                <h4 className="product-name">{name}</h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
               
                <Button variant="outlined" onClick={() => handleRemove(key)} type="button" data-toggle="modal" data-target="#exampleModal" startIcon={<DeleteIcon/>}>Delete</Button>
               
            </div>
                
            
            </div>
        </div>
    );
};

export default ReviewItem;