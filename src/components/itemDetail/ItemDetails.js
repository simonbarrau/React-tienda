
const ItemDetails = ({product}) => {
  return (
    <div>
<img src={product.image} alt={product.tittle}></img>
<div>

<h2>  {product.tittle}  </h2>
<p>  {product.description}  </p>
<p>  {product.category} </p>
<p>  {product.price} </p>
</div>
 </div>
  );
};

export default ItemDetails