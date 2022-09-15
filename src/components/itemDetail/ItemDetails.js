
const ItemDetails = ({product}) => {
  return (
    <div class="card">
      <h2 className="title">  {product.tittle}  </h2>

<img src={product.image} alt={product.tittle} class="card-img-top" height="350px" width="400px"></img>

<p>  {product.description}  </p>
<p>  {product.category} </p>
<p>  {product.price} </p>
 </div>
  );
};

export default ItemDetails
