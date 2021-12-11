import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { Container, Typography, TextField, Button, CircularProgress, Alert, Grid, Rating } from '@mui/material';
import { style } from '@mui/system';
import './Details.css';
import Product from '../Product/Product';
const Details = () => {
    const [value, setValue] = useState(2);
    const {productId} = useParams();
    const [product, setproduct] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    useEffect(()=>{
        fetch(`https://guarded-refuge-42255.herokuapp.com/products/${productId}`)
        .then(res=>res.json())
        .then(data=>setproduct(data));
       
    },[])
      
    return (
       <Container>
           <Typography style={{textAlign:'center', marginTop:'3%', padding:'2%',borderRadius:'10px', backgroundColor:'lightgray'}}>{product.name}</Typography>
           <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <img style={{ width: '50%' }} src={product.img}></img>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ typography: 'body1', paddingTop:'2%' }}>{product.name}</Typography>
                    <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          
        }}
        className="rating"
      /><h6 className="pt-2">review: {product.starCount}</h6>
      <div className="d-flex">
          <Typography sx={{ typography: 'body2' ,backgroundColor:'goldenrod', width:'15%', borderRadius:'5px', textAlign:'center',marginTop:'2%',marginRight:'3%' }}>Top selling</Typography>
       <Typography sx={{ typography: 'body2' ,backgroundColor:'indianred', width:'15%', borderRadius:'5px', textAlign:'center',marginTop:'2%' }}>Trade In</Typography>

      </div>
      <h6 className="pt-3">stock: {product.stock}</h6>
      
       {
           product.features?.map(features => <h6 features={features}>{features.description} : {features.value}</h6>)
       }
       <form>
       <div class="form-group">
    <label for="exampleFormControlTextarea1">Give review:</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="button" class="btn btn-primary">send</button>
       </form>
                </Grid>
            </Grid>

       </Container>
    );
            
                
            
            


};

export default Details;