import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Payment = ({ addedItems, setAddedItems }) => {
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('card');
    const subtotal = addedItems.reduce((total, item) => total + (item.price * item.amount), 0);
    const tax = subtotal * 0.05; 
    const total = subtotal + tax;
    const handleFinalOrder = (e) => {
        e.preventDefault();
        toast.success("Your order is placed successfully.");
        setAddedItems([]); 
        navigate('/'); 
    };

    return (
        <div style={{margin:'auto ', width:'65%', marginTop:'2.5rem'}}>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm p-4">
                        <h4 className="text-center mb-4">Finalize Payment</h4>                        
                        <div className="alert alert-info">
                            <strong>Amount to Pay: </strong> Rs. {total.toFixed(2)}
                        </div>
                        <form onSubmit={handleFinalOrder}>
                            <h6>Select Payment Method</h6>
                            <div className="list-group mb-4">
                                <label className="list-group-item d-flex gap-3">
                                    <input className="form-check-input" type="radio" name="pay" value="card" 
                                            defaultChecked onChange={() => setPaymentMethod('card')} />
                                    <span>Credit / Debit Card (Stripe)</span>
                                </label>
                                <label className="list-group-item d-flex gap-3">
                                    <input className="form-check-input" type="radio" name="pay" value="paypal" 
                                            onChange={() => setPaymentMethod('paypal')} />
                                    <span>PayPal</span>
                                </label>
                                <label className="list-group-item d-flex gap-3">
                                    <input className="form-check-input" type="radio" name="pay" value="cod" 
                                            onChange={() => setPaymentMethod('cod')} />
                                    <span>Cash on Delivery</span>
                                </label>
                            </div>

                            {paymentMethod === 'card' && (
                                <div className="card-fields animate__animated animate__fadeIn">
                                    <input type="text" className="form-control mb-2" placeholder="Card Number" />
                                    <div className="row mb-3">
                                        <div className="col"><input type="text" className="form-control" placeholder="MM/YY" /></div>
                                        <div className="col"><input type="password" className="form-control" placeholder="CVV" /></div>
                                    </div>
                                </div>
                            )}

                            <button type="submit" className="btn btn-success w-100 py-3 fw-bold">
                                Order now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;