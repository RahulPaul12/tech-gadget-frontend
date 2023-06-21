
import { Button, TextField } from '@mui/material';
import React from 'react';
import './Subscribe.css'
const Subscribe = () => {
    return (
        <div className="container bgprimary rounded pb-5 pt-3"> 
            <h2 style={{textAlign:'center', color:'white'}}>Subscribe for updates</h2>
            <h5 style={{textAlign:'center', color:'white'}}>Be aware of new products and special offers.</h5>
            <div class="row">
  <div class="col-lg-8 center-block mx-auto">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Your Email"/>
      <span class="input-group-btn">
      <Button variant="contained" type="submit">Subscribe</Button>
         </span>
    </div>
   
  </div>

</div>



               
  
  
            
        </div>
    );
};

export default Subscribe;