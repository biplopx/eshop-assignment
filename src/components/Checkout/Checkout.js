import React from 'react';
import './Checkout.css';

const Checkout = () => {
  return (
    <section className='checkout'>
      <div className="container">
        <div className='title-container'>
          <h2>Shipping And Payment</h2>
          <div className='shipments-icons'>
            <i class="ri-shopping-cart-fill"></i>
            <hr className='divider' />
            <i class="ri-truck-line icon-bg"></i>
          </div>
        </div>
        <div className="checkout-wrapper">
          <div>
            <button className='btn-primary mr-3'>Log in</button>
            <button className='btn-secondary'>Sign up</button>
            <h4>Shipping Information</h4>
            <form>
              <div className="input-wrapper">
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Address" />
              </div>
              <div className="input-wrapper">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="City" />
              </div>
              <div className="input-wrapper">
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Postal Code / Zip Code" />
              </div>
              <div className="input-wrapper">
                <input type="text" placeholder="Phone Number" />
                <select>
                  <option selected>Poland</option>
                  <option selected>Bangaldesh</option>
                  <option selected>India</option>
                </select>
              </div>
            </form>
          </div>
          <div>
            <h2>Payment Method</h2>
            <div class="payment-container">
              <div className='payment-option'>
                <img src="https://www.stickpng.com/img/download/580b57fcd9996e24bc43c530/image" alt="paypal" />
              </div>
              <div className='payment-option'>
                <img src="https://www.stickpng.com/img/download/580b57fcd9996e24bc43c530/image" alt="paypal" />
              </div>
              <div className='payment-option'>
                <img src="https://www.stickpng.com/img/download/580b57fcd9996e24bc43c530/image" alt="paypal" />
              </div>
              <div className='payment-option'>
                <img src="https://www.stickpng.com/img/download/580b57fcd9996e24bc43c530/image" alt="paypal" />
              </div>
              <div className='payment-option'>
                <img src="https://www.stickpng.com/img/download/580b57fcd9996e24bc43c530/image" alt="paypal" />
              </div>
              <div className='payment-option'>
                <img src="https://www.stickpng.com/img/download/580b57fcd9996e24bc43c530/image" alt="paypal" />
              </div>
            </div>
          </div>
          <div>
            <h2>Your Cart</h2>
            <div className="cart-wrapper">
              <div className="cart-item">
                <div className="product-img">
                  <img src="https://static-01.daraz.com.bd/p/2f5bb029a89516a4e763472d8ddf5135.jpg" alt="" />
                </div>
                <div className="product-name">
                  <p>T-Shirt summber vibes</p>
                  <p>#343343</p>
                </div>
                <div className="product-price">
                  <strong>$89.99</strong>
                </div>
              </div>
              <div className="cart-item">
                <div className="product-img">
                  <img src="https://static-01.daraz.com.bd/p/2f5bb029a89516a4e763472d8ddf5135.jpg" alt="" />
                </div>
                <div className="product-name">
                  <p>Basics Slim Fit T-Shirt</p>
                  <p>#343343</p>
                </div>
                <div className="product-price">
                  <strong>$69.99</strong>
                </div>
              </div>
            </div>
            <div className="sub-total">
              <p>Total Cost</p>
              <strong>$159.98</strong>
            </div>
          </div>
        </div>
        <div className='title-container '>
          <p><i class="ri-arrow-left-line"></i> Back</p>
          <div>
            <button className='btn-secondary mr-3'>Continue Shop</button>
            <button className='btn-primary'>Procced To Payment</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;