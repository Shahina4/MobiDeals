import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Shipping = ({ addedItems }) => {
    const navigate = useNavigate();
    const [address, setAddress] = useState({
        fullName: '',
        street: '',
        city: '',
        phone: '',
        method: 'Standard'
    });

    const subtotal = addedItems.reduce((total, item) => total + (item.price * item.amount), 0);
    const shippingCost = address.method === 'Express' ? 150 : 0;
    const total = subtotal + shippingCost;

    const handleInputChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/payment'); 
    };

    return (
        <div style={{margin: 'auto', width: '65%', marginTop: "3.5rem"}}>
            <div className="row">
                <div className="col-md-7">
                    <div className="card shadow-sm p-4" style={{marginRight:'3rem'}}>
                        <h4 className="mb-4">Shipping Address</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input type="text" name="fullName" className="form-control" onChange={handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Street Address</label>
                                <input type="text" name="street" className="form-control" onChange={handleInputChange} required />
                            </div>
                                <div className="col">
                                    <label className="form-label">City</label>
                                    <input type="text" name="city" className="form-control" onChange={handleInputChange} required />
                                </div>
                                <div className="col">
                                    <label className="form-label">Phone</label>
                                    <input type="text" name="phone" className="form-control" onChange={handleInputChange} required />
                                </div>      
                            <button type="submit" style={{backgroundColor:'rgb(255, 186, 12)', margin:"auto 0rem"}} className="btn btn-primary w-100 mt-4 py-2">Proceed to Payment</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card shadow-sm p-4 bg-light">
                        <h4 className="mb-4">Order Summary</h4>
                        {addedItems.map(item => (
                            <div key={item.id} className="d-flex justify-content-between mb-2">
                                <span>{item.model} <small className="text-muted">x{item.amount}</small></span>
                                <span>Rs. {item.price * item.amount}</span>
                            </div>
                        ))}
                        <hr />
                        <div className="d-flex justify-content-between mb-2">
                            <span>Subtotal</span>
                            <span>Rs. {subtotal}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <span>Shipping</span>
                            <span className="text-success">{shippingCost === 0 ? 'FREE' : `Rs. ${shippingCost}`}</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between fw-bold fs-5">
                            <span>Total</span>
                            <span>Rs. {total}/-</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipping;