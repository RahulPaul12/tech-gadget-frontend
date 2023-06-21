import React from 'react';
import img1 from '../../images/dell-expresssign-is-one-of-the-most-impressing-features-on-the-laptop--removebg-preview.png';
import img2 from '../../images/Xiaomi-Mi-11-Pro-featured-image-packshot-review-Recovered-removebg-preview.png';
import img3 from '../../images/87bff0f3ca594b3bbcc58ff6e4466ec1_R6_FrontSlantLeft_RF24-105mmF4-7.1ISSTM.png';
import './Showproduct.css';
const Showproduct = () => {
    return (
        <div class="">
            
            
            <section class="container  catagories pt-2 pb-2">
           
            <div class=" row g-4">
                       
        
            <div class="col-lg-4 col-md-6 col-12 box">
                <div class="ribbon"><span>New</span></div>
                    <div class="p-1 justify-content-between border bg-warning rounded-3 d-flex align-items-center">
                    
                        <h1 class="text-white">Laptop</h1>
                        <img src={img1} style={{width:'30%', marginRight:'5%'}} alt=""/>
                    </div>
                
                </div>
            
                
                <div class="col-lg-4 col-md-6 col-12 box">
                
                   <div class="ribbon red"><span>New</span></div>
                    <div class="p-2 justify-content-between border bg-primary rounded-3 d-flex align-items-center">
                        <h1 class="text-white">Mobiles</h1>
                        <img src={img2} style={{width:'30%', marginRight:'5%'}} alt=""/>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12 box">
                <div class="ribbon blue"><span>New</span></div>
                    <div class="p-1 justify-content-between border bg-success rounded-3 d-flex align-items-center">
                        <h1 class="text-white">Camera</h1>
                        <img src={img3} style={{width:'24%', marginRight:'5%'}} alt=""/>
                    </div>
                </div>
            </div>
        </section>

        </div>
    );
};

export default Showproduct;