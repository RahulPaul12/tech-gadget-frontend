import { Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css';
import Button from '@mui/material/Button';
import { NavLink,useHistory } from 'react-router-dom';
const Shipping = (props) => {
    const {cart} = props;
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const history= useHistory();
    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;
        
        
        fetch('https://guarded-refuge-42255.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    clearTheCart();
                    reset();
                }
            })
            history.push('./payment');
    };
    return ( 
        <div className="container mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4" gutterBottom style={{textAlign:'center', paddingTop:5, paddingBottom:5 , marginTop:4 , color:'brown'}}>
        Shipping Address
        
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            defaultValue={user.displayName}
            {...register("name")}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            defaultValue={user.email}
            {...register("email")}
            fullWidth
            autoComplete="shipping email"
            variant="standard"
          />
          </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
      
         <Button variant="contained" type="submit">Submit</Button>
       
    </form>
        </div>
    );
};

export default Shipping;
//  <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}> */}

//                 <input defaultValue={user.displayName} {...register("name")} />

//                 <input defaultValue={user.email} {...register("email", { required: true })} />
//                 {errors.email && <span className="error">This field is required</span>}
//                 <input placeholder="Address" defaultValue="" {...register("address")} />
//                 <input placeholder="City" defaultValue="" {...register("city")} />
//                 <input placeholder="phone number" defaultValue="" {...register("phone")} />

//                 <input type="submit" />
//             </form> 