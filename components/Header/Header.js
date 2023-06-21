import { IconButton } from '@mui/material';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Banner from '../Banner/Banner';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Header.css';
import Badge from '@mui/material/Badge';
import image from '../../images/rsz_user-icon-trendy-flat-style-isolated-grey-background-user-symbol-user-icon-trendy-flat-style-isolated-grey-background-123663211.jpg';
//import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import { AccountCircle } from '@mui/icons-material';
const Header = (props) => {

  
    const { user, logOut } = useAuth();
    
    const { cart } = props;
    // const totalReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totalReducer, 0);
    let totalQuantity = 0;
    let total = 0;
    
        totalQuantity = totalQuantity;
    
    // const StyledBadge = styled(Badge)(({ theme }) => ({
    //     '& .MuiBadge-badge': {
    //       right: -3,
    //       top: 13,
    //       border: `2px solid ${theme.palette.background.paper}`,
    //       padding: '0 4px',
    //     },
    //   }));


      let imageurl = "";
  if(user.photoURL===null){
      imageurl=image;
  }
  else{
    imageurl=user.photoURL;
  }
    return (
     
        <div className="header ">
         
           
           <Navbar bg="dark" expand="lg" >
  <Container >
    <Navbar.Brand 
    style={{ color: 'white', fontSize:40 }}>

    <span style={{marginLeft:''}}>T</span>ech <span>G</span>adget
     </Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
   <Navbar.Collapse id="basic-navbar-nav">
<div style={{marginLeft:'auto'}}>
      <Nav >
                 <NavLink to="/home" style={{ alignItems:'right' }} className="active">Home</NavLink>
                <NavLink to="/shop" >Shop</NavLink>
                <NavLink to="/review" >Order Review</NavLink>
               <NavLink to="/about">About us</NavLink>
            
                {user.email && <NavLink to="/orders">Orders</NavLink>}
                  {user.email && <img src= {imageurl} alt="" style={{width:'10%', borderRadius:"50%"}}/>}
                {
                    user.email ?
                        <></>
                        :
                        <NavLink to="/login">Login</NavLink>}
                        {
                          user.email ?
                          <NavDropdown title="" id="basic-nav-dropdown">
          <NavDropdown.Item to="/addproduct" className="item"><NavLink to="/addproduct" >Add Product</NavLink></NavDropdown.Item>
           <NavDropdown.Item to="/review" className="item"><NavLink to="/review" >Manage Order</NavLink></NavDropdown.Item>
           <NavDropdown.Item to="#action/3.3" onClick={logOut} className="item">Log Out</NavDropdown.Item>
           
       </NavDropdown> 
       : <div></div>
                        }
       
      </Nav>
       </div>
    </Navbar.Collapse>
  </Container>
 </Navbar>
 
            
 
        </div>
        
    );
};

 export default Header; 
 