// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const ProductDetails = ({ onAddToCart }) => {
//   const location = useLocation();
//   const phone = location.state?.phone;
  
//   return (
//     <>
//   <table style={{margin:'auto', width:'75%', marginTop:'5rem'}}>
//     <tr style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//       <td>
//         <img src={phone.image} className="img-fluid rounded-start" alt={phone.model} style={{width:'75%', height:'400px'}}/>
//       </td>
//       <td style={{paddingLeft:'-5rem',position:'relative'}}>
//         <div className="card-body">
//         <h5 className="card-title">{phone.model}</h5>
//         {console.log('phone',phone)
//         }
//         <div className="card-text" style={{lineHeight:'20px',padding:'10px 0'}}>{Object.entries(phone.specs).map(([key,value])=><p key={key}>{value} {key.charAt(0).toUpperCase()+ key.slice(1)}</p>)}</div>
//         <p className="card-text"><b>Rs. </b>{phone.price}/-</p>
//         {/* <Link to='/cart-items'>
//         <button className="buy-btn mr-2 px-3">Buy Now</button>
//         </Link> */}
//         <button className="cart-btn m-2" onClick={()=>onAddToCart(phone)}>Add to Cart</button>
//       </div>
//       </td>
//     </tr>
//   </table>
//     </>
//   );
// };

// export default ProductDetails;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductDetails = ({ onAddToCart, isLoggedIn }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const phone = location.state?.phone;

  const handleAddToCart = (phone) => {
    // Check if user is logged in
    // const isLoggedIn = localStorage.getItem("isLoggedIn"); // assume 'true' is set on login

    if (!isLoggedIn) {
      toast.info("Please log in first to add items to your cart!");
      navigate("/login"); // redirect to login page
      return;
    }

    // User is logged in, add to cart
    onAddToCart(phone);
  };

  return (
    <>
      <table style={{ margin: "auto", width: "75%", marginTop: "5rem" }}>
        <tr style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <td>
            <img
              src={phone.image}
              className="img-fluid rounded-start"
              alt={phone.model}
              style={{ width: "75%", height: "400px" }}
            />
          </td>
          <td style={{ paddingLeft: "-5rem", position: "relative" }}>
            <div className="card-body">
              <h5 className="card-title">{phone.model}</h5>
              <div
                className="card-text"
                style={{ lineHeight: "20px", padding: "10px 0" }}
              >
                {Object.entries(phone.specs).map(([key, value]) => (
                  <p key={key}>
                    {value} {key.charAt(0).toUpperCase() + key.slice(1)}
                  </p>
                ))}
              </div>
              <p className="card-text">
                <b>Rs. </b>
                {phone.price}/-
              </p>
              <button
                className="cart-btn m-2"
                onClick={() => handleAddToCart(phone)}
              >
                Add to Cart
              </button>
            </div>
          </td>
        </tr>
      </table>
    </>
  );
};

export default ProductDetails;
