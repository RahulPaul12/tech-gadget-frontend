import { color } from '@mui/system';
import React from 'react';
import './Review.css';
const Review = () => {
    return (
        
        <div class="unit1 row mx-auto ">
            <h2 style={{textAlign:'center', color:'brown' , textDecoration:'underLine'}}>Review</h2>
            <div class="unit col col-lg-4 col-md-12 col-12 mt-3 mb-4">
          <img src="https://vidyasheela.com/web-contents/website-components/About-Us-Pages/responsive-about-us-page-html/Director.jpg" alt=""/>
          <p>Jona Chen, Director</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus unde aliquid laborum voluptatum distinctio nobis?'</p>

        </div>
            
        <div class="unit col col-lg-4 col-md-12 col-12 mt-3 mb-4">
          <img src="https://vidyasheela.com/web-contents/website-components/About-Us-Pages/responsive-about-us-page-html/Principal.jpg" alt=""/>
          <p>Mathew Tram, Principal</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus unde aliquid laborum voluptatum distinctio nobis?'</p>

        </div>
        <div class="unit col col-lg-4 col-md-12 col-sm-12 mt-3 mb-4">
          <img src="https://vidyasheela.com/web-contents/website-components/About-Us-Pages/responsive-about-us-page-html/vice-principal.jpg" alt=""/>
          <p>Lawn Sethi, Vice Principal</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus unde aliquid laborum voluptatum distinctio nobis?'</p>
        </div>
        </div>
     
    

        
    );
};

export default Review;