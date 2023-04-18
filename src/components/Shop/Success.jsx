import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './success.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Success() {
  const location = useLocation();
  const data = location.state.data;
  const cart = useSelector((state) => state.cart);
  const [isOrderCreated, setIsOrderCreated] = useState(false);
  const navigate = useNavigate();
  const handleNav = () => {
    navigate('/');
  };

  useEffect(() => {
    const createOrder = async () => {
      try {
        await axios.post('http://localhost:3001/orders/create', {
          userId: '640e219e1c359ed25b1a95c3',
          customerName: data.billing_details.name,
          products: cart.products.map((item) => ({
            productId: item._id,
            name :item.prodName,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        console.log(cart)
        setIsOrderCreated(true);
      } catch (error) {
        console.log(error);
      }
    };
    if (data && !isOrderCreated) {
      createOrder();
    }
    console.log(data);
    console.log(cart);
  }, [ isOrderCreated]);

  return (
    <div className="succ">
      <div id="card" className="animated fadeIn">
        <div id="upper-side">
          <CheckCircleIcon id="checkmark" />
          <h3 id="status"> Success </h3>
        </div>
        <div id="lower-side">
          {isOrderCreated ? (
            <>
              <p id="message">You paid {cart.total}. Your order is being prepared.</p>
              <a onClick={()=>handleNav()} id="contBtn">
                Continue
              </a>
            </>
          ) : (
            <p id="message">Creating your order...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Success;
