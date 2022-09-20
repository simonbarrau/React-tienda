import './ItemDetails.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from "react";
import { Link } from 'react-router-dom';


const ItemDetails = ({product}) => {
  const [initialState, setInitialState] = useState(0);

  const handleClick=() => {
    console.log(initialState);
  }
  

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
 

<ItemCount  initialState={initialState}  setInitialState={setInitialState}/>
<Link to={'/cart'}> 
<button onClick={handleClick}> Terminar Compra</button>
</Link> 


 </div>
 </div>

  );
};

export default ItemDetails
