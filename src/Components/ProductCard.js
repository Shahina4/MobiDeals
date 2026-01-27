import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ brand, phone }) => {
  return (
    <>
    <Link
        to={`/${brand}/${phone.model}`}
        state={{ phone }}
        style={{textDecoration:'none', color:'navy'}}
      >
        <td className="product-card">
          <img src={phone.image} className="card-img" alt={phone.model} />
          <div className="card-body">
            <h5 className="card-title">{phone.model}</h5>
          </div>
        </td>
      </Link>
    </>
  );
};

export default ProductCard;