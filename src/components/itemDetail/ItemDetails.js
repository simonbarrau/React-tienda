import './ItemDetails.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetails = ({product}) => {
  const stock=8
  return (
    <div className='card' >

    <div class="cardd" >
      <h2 className="title">  {product.tittle}  </h2>

<img src={product.image} alt={product.tittle} class="card-img-topp"></img>

<p className="descripciones">  {product.description}  </p>
      <div class="cart" >
<p className='leter'>  Category: {product.category} </p>
<p className='leter'>  Price:{product.price} </p>

 </div> 

<ItemCount stock={stock} />
 </div>
 </div>

  );
};

export default ItemDetails
