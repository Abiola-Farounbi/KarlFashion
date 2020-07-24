import React from 'react';


const Product2 = ({price,image,name,handleAddToCart}) => {
  return (
    <div className='productText' >
        
    <img    className="productImage" src={` /Images1/women/${image}.jpg`}  alt={name} />

    <h4>  {name} </h4>
    <h6> ₦{price} </h6>
    <button onClick = { (e) =>handleAddToCart(name,price,image)}> Add to cart</button>
    </div>
  );
}

  export default Product2;