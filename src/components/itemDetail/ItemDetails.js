import './ItemDetails.css';
import ItemCount from '../ItemCount/ItemCount';
const ItemDetails = ({product}) => {
  const stock=5
  return (
    <div class="card" >
      <h2 className="title">  {product.tittle}  </h2>

<img src={product.image} alt={product.tittle} class="card-img-top" height="350px" width="400px"></img>

<p className="descripciones">  {product.description}  </p>
<p>  {product.category} </p>
<p>  {product.price} </p>
<ItemCount stock={stock} />
 </div>
  );
};

export default ItemDetails
