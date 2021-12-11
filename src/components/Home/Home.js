import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Shop from '../Shop/Shop';
import Showproduct from '../Showproduct/Showproduct';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Showproduct></Showproduct>
            <Shop></Shop>
            <Review></Review>
            <Subscribe></Subscribe>
            
        </div>
    );
};

export default Home;