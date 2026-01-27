// import React, { useEffect, useState } from "react";

// const CartItems = ({addedItems,setAddedItems,quantity}) => {
//   const [price,setPrice] = useState(0);
//   const handlePrice = ()=>{
//         let ans = 0;
//         addedItems.map((item)=>(
//             ans += item.amount * item.price
//         ))
//         setPrice(ans);
//     }

//     const handleRemove = (id) =>{
//         const arr = addedItems.filter((item)=>item.id !== id);
//         setAddedItems(arr);
//     }

//     useEffect(()=>{
//         handlePrice();
//     })

//   return (
//     <div className="cart-container" style={{textAlign:'center',margin:'auto',width:'100%',margin:'1rem',position:'static'}}>
//       <h2 style={{color:'navy'}}>Cart Items</h2>
//       {addedItems.length === 0 ? (
//         <h4>No items in cart.</h4>
//       ) : (
//           <div style={{width:'60%',margin:'auto'}}>
//             {
//               addedItems?.map((item) => (
//   <div className="cart_box" key={item.id}>
//     <div className="cart_img">
//       <img src={item.image} alt='cart-item'/>
//       <p >{item.model}</p>
//     </div>
//     <div>
//       <button className="btn btn-secondary" onClick={()=>quantity(item, -1)}> - </button>
//       <span className="px-3">{item.amount}</span>
//       <button className="btn btn-secondary" onClick={()=>quantity(item, +1)}> + </button>
//     </div>
//     <div>
//       <span>Rs. {item.price}/-</span>
//       <button onClick={()=>handleRemove(item.id)}>Remove</button>
//     </div>
//   </div>
// ))}
//     <div className='total'>
//       <span>Total Price of your Cart</span>
//       <span>Rs. {price}/-</span>
//     </div>
//           <br/><br/>            
//           </div>
// )
// }
//     </div>
//   );
// };

// export default CartItems;


import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const CartItems = ({ addedItems, setAddedItems, quantity }) => {
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  const handlePrice = () => {
    let ans = 0;
    addedItems.forEach((item) => {
      ans += item.amount * item.price;
    });
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = addedItems.filter((item) => item.id !== id);
    setAddedItems(arr);
    toast.info("Item removed from cart!");
  };

  const handleBuyNow = () => {
    if (addedItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    setAddedItems([]);
    setPrice(0);

    toast.success("Order placed successfully! Thank you for shopping.");

    setTimeout(() => {
      navigate("/"); 
    }, 1500); 
  };

  useEffect(() => {
    handlePrice();
  }, [addedItems]);

  return (
    <div
      className="cart-container"
      style={{ textAlign: "center", margin: "1rem auto", width: "100%", position: "static" }}
    >
      <h2 style={{ color: "navy" }}>Cart Items</h2>
      {addedItems.length === 0 ? (
        <h4>No items in cart.</h4>
      ) : (
        <div style={{ width: "60%", margin: "auto" }}>
          {addedItems.map((item) => (
            <div
              className="cart_box"
              key={item.id}
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}
            >
              <div className="cart_img">
                <img src={item.image} alt="cart-item" style={{ width: "80px", height: "80px", objectFit: "cover" }} />
                <p>{item.model}</p>
              </div>
              <div>
                <button className="btn btn-secondary" onClick={() => quantity(item, -1)}> - </button>
                <span className="px-3">{item.amount}</span>
                <button className="btn btn-secondary" onClick={() => quantity(item, +1)}> + </button>
              </div>
              <div>
                <span>Rs. {item.price}/-</span>
                <button onClick={() => handleRemove(item.id)} style={{ marginLeft: "10px" }}>Remove</button>
              </div>
            </div>
          ))}
          <div className="total" style={{ marginTop: "1rem", fontWeight: "bold" }}>
            <span>Total Price of your Cart: </span>
            <span>Rs. {price}/-</span>
          </div>
          <button
            className="btn btn-success"
            onClick={handleBuyNow}
            style={{ marginTop: "1rem", padding: "0.5rem 2rem", fontSize: "1rem" }}
          >
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
};

export default CartItems;
