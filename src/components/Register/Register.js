import { Button, CircularProgress, Container, Grid, TextField, Typography,Alert, Backdrop } from '@mui/material';
import React, { useState } from 'react';

import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [logindata, setlogindata]=useState({})
     const history = useHistory();
    const { user, registerUser, loading, authError } = useAuth();

    const handleonchange = e =>{
    
        const field = e.target.name;
        const value = e.target.value;
        const newlogindata = {...logindata};
        newlogindata[field]=value;
        setlogindata(newlogindata);

    }
    
    const handleloginsubmit = e =>{
        if(logindata.password !== logindata.password2){
            alert('your password didnot match');
            return 
        }
        else{
            history.push('./home');
        }
        registerUser(logindata.email, logindata.password)
        console.log(logindata);
        e.preventDefault();
    }

    return (
        <Container>
        
               <Grid item xs={12} md={12} lg={12} sx={{mt:20 , width:'100%'}}>
                 <Typography variant="body1" gutterBottom sx={{font:'Bold', textAlign:'center'}}>
                     Register
                 </Typography>

                 {!loading && <form onSubmit={handleloginsubmit} style={{textAlign:'center'}}>
                 <TextField 
                 sx={{width:"75%" , m:1}}
                 name="email"
                 onChange={handleonchange}
                 id="standard-basic" 
                 label="Your Email" 
                 type="email"
                 variant="standard" />
                 <TextField 
                 sx={{width:"75%" , m:1}}
                 name="password"
                 onChange={handleonchange}
                 id="standard-basic" 
                 label="Your password" 
                 type="password"
                 variant="standard" />
                 <TextField 
                 sx={{width:"75%" , m:1}}
                 name="password2"
                 onChange={handleonchange}
                 id="standard-basic" 
                 label="Confirm password" 
                 type="password"
                 variant="standard" />
                
                 <Button variant="contained" sx={{width:"75%" , m:1}} type="submit">Register</Button>
                 <br/>
                 <NavLink to="/login">
                    <Button variant="text">Already registered? Login</Button>
                </NavLink> </form>}
                {loading && <CircularProgress/>}
                {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                
                {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
               
            
        </Container>
    );
};
export default Register;
        