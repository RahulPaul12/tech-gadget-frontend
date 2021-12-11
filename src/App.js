import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Addproduct from './components/Addproduct/Addproduct';
import Banner from './components/Banner/Banner';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import Orders from './components/Orders/Orders';
import Payment from './components/Payment/Payment';

import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Shared from './components/Shared/Shared';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
         
          
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/shop">
              <Header></Header>
              <Shop></Shop>
            </Route>
            <Route path="/review">
            <Header></Header>
              <OrderReview></OrderReview>
            </Route>
            <Route path="/About">
            <Header></Header>
             <About></About>
            </Route>
            <Route path="/addproduct">
              <Header></Header>
              <Addproduct></Addproduct>
            </Route>
            <PrivateRoute path="/shipping">
            <Header></Header>
              <Shipping></Shipping>
            </PrivateRoute>
            <PrivateRoute path="/payment">
            <Header></Header>
              <Payment></Payment>
            </PrivateRoute>
          
            <PrivateRoute path="/placeorder">
            <Header></Header>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/orders">
            <Header></Header>
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/details/:productId">
              <Header></Header>
              <Details></Details>
            </PrivateRoute>
            <Route path="/login">
            <Header></Header>
              <Login></Login>
            </Route>
            <Route path="/register">
            <Header></Header>
            
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
        <Shared></Shared>
      </AuthProvider>
    </div>
  );
}

export default App;
