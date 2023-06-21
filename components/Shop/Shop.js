import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb } from '../../utilities/fakedb';
import './Shop.css';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import useAuth from '../../hooks/useAuth';
import { CircularProgress } from '@mui/material';
import { Spinner } from 'react-bootstrap';




const Shop = () => {
    
    const [loading, setloading] = useState(true)
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart();
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    
    // products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([]);
    const size = 12;
    useEffect(() => {
         setloading(true)
        fetch(`https://tech-gadget-backend.onrender.com/products?page=${page}&&size=${size}`)
           
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setDisplayProducts(data.products);
                const counts = data.count;
                const pageNumber = Math.ceil(counts / size);
                //setPageCount(pageNumber);
                setPageCount(data.size)
            });
    }, [page]);



    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);

    }

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }

    return (
        <>
        
             <div className="search-container">
             <div>
            <div class="container h-100">
                 <div class="d-flex justify-content-center h-100">
                   <div class="searchbar">
                      <input class="search_input" type="text" name="" placeholder="Search Product"/>
                        <a onClick={handleSearch} class="search_icon"><i class="fas fa-search"></i></a>
                   
               </div>
               </div>
            </div>
        </div>
    
             </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >
                        </Product>)
                    }
                    </div>


        <section className="pagination">
        <button onClick={() => setPage(1)} disabled={loading || page === 0}>
          first
        </button>
        <button
          onClick={() => setPage(page - 1)}
          disabled={loading || page === 0}
        >
          previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={loading || products.length < size}
        >
          next
        </button>
        <button
          onClick={() => setPage(Math.round(pageCount / size) - 1)}
          disabled={loading || products.length < size}
        >
          last
        </button>
      </section>


                    {/* <div className="pagination">
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <button
                                    className={number === page ? 'selected' : ''}
                                    key={number}
                                    onClick={() => setPage(number)}
                                >{number + 1}</button>)
                        }
                    </div> */}
                </div>
               
            
        </>
    );
};

export default Shop;