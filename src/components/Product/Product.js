import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props);
    const { _id , name, img, seller, price, stock, star} = props.product;
    return (
        <div className="product">
              <div class="card-group">
                 <div class="card shadow p-3 mb-5 bg-white rounded">
                     <img class="card-img-top mx-auto" src={img} alt="Card image cap"style={{width:'50%' }}/>
                  <div class="card-body rounded-bottom pt-0">
                      <h5 class="card-title">{name}</h5>
                       <p class="card-text">This is a wider product with supporting you below as a natural lead-in to additional content.</p>
                       <p>Price: {price}</p>
                       <h6>By: {seller}</h6>
                       <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                   </div>
                   <div class="card-footer d-flex justify-content-between">
                   <Button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn-regular"
                ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</Button>
                  <Link to={`/details/${_id}`}>
                <Button className="btn btn-warning" className="btn-regular">View Details</Button>
            </Link>
                   </div>
                </div>
                </div>
           
                
            </div>
        
    );
};

export default Product; 
{/* <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <br /> */}