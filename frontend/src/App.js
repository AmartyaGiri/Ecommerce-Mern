import './App.css';
import Header from "./component/layout/Header/Header.js"
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Footer from './component/layout/Footer/Footer';
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from './component/user/LoginSignUp';
import React, { useEffect } from 'react';
import store from './store';
import { loadUser } from './actions/userAction';
import UserOptions from './component/layout/Header/UserOption';
import { useSelector, useDispatch} from 'react-redux';
import Profile from './component/user/Profile.js';
import ProtectedRoute from './component/Route/ProtectedRoute.js';
import UpdateProfile from './component/user/UpdateProfile.js';
import UpdatePassword from './component/user/UpdatePassword.js';
import ForgotPassword from './component/user/ForgotPassword.js';
import ResetPassword from './component/user/ResetPassword.js';
import Cart from './component/cart/Cart.js';
import Shipping from './component/cart/Shipping.js';
import ConfirmOrder from './component/cart/confirmOrder.js';
import OrderSuccess from './component/cart/OrderSuccess.js';
import MyOrders from './component/order/MyOrders.js';
import OrdersDetails from './component/order/OrderDetails.js';
import Dashboard from './component/admin/Dashboard.js';
import ProductList from './component/admin/ProductList.js';
import NewProduct from './component/admin/NewProduct';
import UpdateProduct from './component/admin/UpdateProduct.js';
import OrderList from './component/admin/OrderList.js';
import ProcessOrder from './component/admin/ProcessOrder.js';
import UsersList from './component/admin/UsersList.js';
import UpdateUser from './component/admin/UpdateUser';
import ProductReviews from './component/admin/ProductReviews';

function App() {

  const { isAuthenticated, user} = useSelector((state) => state.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    store.dispatch(loadUser());  
  }, [dispatch]);

  return (
   <Router>
    <Header />
    
    { isAuthenticated && <UserOptions user={user} />}
    <Routes>
      <Route  path="/" element = {<Home/>} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:keyword" element = {<Products/>} />
      <Route path="/search" element={<Search />} />
      <Route path="/login" element={<LoginSignUp />} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/admin/dashboard" element={<Dashboard/>} />
      <Route path="/admin/products" element={<ProductList />} />
      <Route path="/admin/product" element={<NewProduct />} />
      <Route path="/admin/product/:id" element={<UpdateProduct/>} />
      <Route path="/admin/orders" element={<OrderList/>} />
      <Route path="/admin/order/:id" element={<ProcessOrder/>} />
      <Route path="/admin/users" element={<UsersList/>} />
      <Route path="/admin/user/:id" element={<UpdateUser/>} />
      <Route path="/admin/reviews" element={<ProductReviews/>} />

     <Route path="/password/forgot" element={<ForgotPassword />} />
     <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route element={<ProtectedRoute />} >
          <Route path="/account" element={<Profile />} />
          <Route path="/me/update" element={<UpdateProfile />} />
          <Route path="/shipping" element={<Shipping/>} />
          <Route path="/order/confirm" element={<ConfirmOrder />} />
          <Route path="/order/success" element={<OrderSuccess/>} />
          <Route path="/orders" element={<MyOrders/>} />
          <Route path="/order/:id" element={<OrdersDetails/>} />
          <Route path="/password/update" element={<UpdatePassword />} />
          
         
         

        </Route>



    </Routes>
    
    <Footer />
   </Router>
  );
}

export default App;
