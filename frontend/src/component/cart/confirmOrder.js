import React, { Fragment, useState } from "react";
import CheckoutSteps from "../cart/CheckoutSteps";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import "./ConfirmOrder.css";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../actions/orderAction";
import axios from "axios";
import { useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { ADD_TO_CART_RESET } from "../../constants/cartConstants";
const ConfirmOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user, loading } = useSelector((state) => state.user);
  
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > 1000 ? 0 : 200;

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  const Order = {
    orderItems: cartItems,
    shippingInfo,
    itemsPrice: subtotal,
    taxPrice: tax,
    shippingPrice: shippingCharges,
    totalPrice,

  }

  const proceedToPayment = async () => {
    setIsProcessing(true);

    const { data: { key } } = await axios.get('/api/v1/getKey');

    const { data: { order } } = await axios.post('/api/v1/checkout', {
       amount: totalPrice
    });
    console.log(order);

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Ecommerce",
      description: "Payment for your order",
      image: user.avatar.url,
      order_id: order.id,
      handler: function (response) {
        Order.paymentInfo = {
          id: response.razorpay_payment_id,
          status: "succeeded",
        };
        dispatch(createOrder(Order));
        navigate("/order/success");
        dispatch({ type: ADD_TO_CART_RESET });
      },
      prefill: {
        name: user.name,
        email: user.email,
        contact: shippingInfo.phoneNo,
      },
      notes: {
        address,
      },
      theme: {
        color: "#686CFD",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
    razor.on("payment.failed", function (response) {
      alert("Payment failed");
    }
    );
    setIsProcessing(false);
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
      <MetaData title="Confirm Order" />
      <CheckoutSteps activeStep={1} />
      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            <Typography>Shipping Info</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Name:</p>
                <span>{user.name}</span>
              
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography>Your Cart Items:</Typography>
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.product}>
                    <img src={item.image} alt="Product" />
                    <Link to={`/product/${item.product}`}>
                      {item.name}
                    </Link>{" "}
                    <span>
                      {item.quantity} X ₹{item.price} ={" "}
                      <b>₹{item.price * item.quantity}</b>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="orderSummary">
            <Typography>Order Summery</Typography>
            <div>
              <div>
                <p>Subtotal:</p>
                <span>₹{subtotal}</span>
              </div>
              <div>
                <p>Shipping Charges:</p>
                <span>₹{shippingCharges}</span>
              </div>
              <div>
                <p>GST:</p>
                <span>₹{tax}</span>
              </div>
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>₹{totalPrice}</span>
            </div>

            <button onClick={proceedToPayment} disabled={isProcessing} >{ isProcessing ? "Processing...":"Proceed To Payment"}</button>
          </div>
        </div>
      </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ConfirmOrder;
