import { Button, Grid, TextField, Typography } from '@mui/material';
//import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLocation, useHistory, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { user, loginUser, isLoading, authError,HandleGoogleLogin } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const [logindata, setlogindata]=useState({})
    
    const navigate = useHistory();
    const handleonchange =e=>{

        const field = e.target.name;
        const value = e.target.value;
        const newlogindata = {...logindata};
        newlogindata[field]=value;
        setlogindata(newlogindata);
        console.log(logindata.email);

    }
    
    const handleloginsubmit = e=>{
        
        loginUser(logindata.email, logindata.password, location, history);
        if(logindata.email, logindata.password)
        alert("Completed")
       
        history.push(redirect_uri);
         e.preventDefault();
    }

    const handleGoogleLogin = () => {
        
        HandleGoogleLogin(location,history)
            
               history.push(redirect_uri);
           
            
            
    }
    

    return (
        <Container>
        
               <Grid item xs={12} md={12} lg={12} sx={{mt:20 , width:'100%'}}>
                 <Typography variant="body1" gutterBottom sx={{font:'Bold', textAlign:'center'}}>
                    Login
                 </Typography>
                 <form onSubmit={handleloginsubmit} style={{textAlign:'center'}}>
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
                 
                
                 <Button variant="contained" sx={{width:"75%" , m:1}} type="submit">Login</Button>
                 <br/>
                 <div>-------or----------</div>
                 <NavLink to="/register">
                    <Button variant="text">New to Here? Register</Button>
                </NavLink>
                <br/>
                <Button variant="contained" onClick={handleGoogleLogin}><a href="" class="btn btn-primary btn-floating m-1"
      
      style={{backgroundColor: '#dd4b39'}}
      href="#!"
      role="button">
        <i class="fab fa-google"></i>
      </a>Google Sign in</Button>
                 </form>
                
                </Grid>
               
            
                
                
                
                
        </Container>
        
            
    );
};

export default Login;
{/* <div className="login-form">
            <div>
                <h2>Login</h2>
                <form >
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form> */}