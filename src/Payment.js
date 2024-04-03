import React, { useState } from 'react';
import './Payment.css'; 
import { Link,useNavigate } from 'react-router-dom';

const Payment = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: ''
  });

  const nav  = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    nav('/final')
  };

  return (
    <div className="payment-container">
      <h2>Payment Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="cardHolder">Card Holder:</label>
          <input type="text" id="cardHolder" name="cardHolder" value={formData.cardHolder} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input type="text" id="expirationDate" name="expirationDate" value={formData.expirationDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} />
        </div>
        <Link to={'/final'}><button type="submit" >Submit Payment</button></Link>
      </form>
    </div>
  );
};

export default Payment;
