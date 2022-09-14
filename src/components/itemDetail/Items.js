import React from 'react'

const Items = ({product}) => {
  return (
    <div>
        <img src={product.image} alt={product.tittle}>  </img>    

<h2>  {product.tittle}  </h2>
<p>  {product.description}  </p>
<p>  {product.category} </p>
<p>  {product.price} </p>
    </div>
  );
};

export default Items