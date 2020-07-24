import React from 'react';


const Product3 = ({price,image,name,handleAddToCart}) => {
  return (
    <div className='productText' >
        
    <img    className="productImage" src={` /Images1/accessories/${image}.jpg`}  alt={name} />

    <h4>  {name} </h4>
    <h6> ₦{price} </h6>
    <button onClick = { (e) =>handleAddToCart(name,image,price)}> Add to cart</button>
    </div>
  );
}

  export default Product3;